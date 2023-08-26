import { take, put, delay, call, fork } from "redux-saga/effects";
import entriesTypes, {
  getIdEntrioesDetails,
  populateEntries,
} from "../actions/entries.actions";
import axios from "axios";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ALL_ENTRIES);
  const outpute = [];
  const result = yield call(
    axios,
    "https://entriesdis-default-rtdb.firebaseio.com/discription.json"
  );
  for (let res in result.data) {
    if (result.data[res] !== null) {
      outpute.push(result.data[res]);
    }
  }
  yield put(populateEntries(outpute));
  console.log("I have to get data", outpute);
}

export function* getEntrioesDetails(id) {
  const { data } = yield call(
    axios,
    `https://entriesvalue-default-rtdb.firebaseio.com/values/${id}.json`
  );
  console.log(data);
  yield put(getIdEntrioesDetails(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getEntrioesDetails, entry.id);
  }
}
