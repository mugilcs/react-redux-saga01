import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import entriestype from "../actions/entries.actions";

const headers = { Authorization: "Bearer my-token" };

export function* addEntriesSaga() {
  yield takeLatest(entriestype.ADD_ENTRY, addEntriesToDb);
}

function* addEntriesToDb({ payload }) {
  console.log("payload___>>", yield payload);
  yield call(addEntryDiscription, payload);
  yield call(addEntryValue, payload);
  yield put({ type: entriestype.ADD_ENTRY_RESULT, payload });
}

async function addEntryDiscription(payload) {
  const disc = {
    id: payload.id,
    discription: payload.discription,
  };
  await axios.post(
    `https://entriesdis-default-rtdb.firebaseio.com/discription/${disc}.json`
  );
}

async function addEntryValue(payload) {
  const val = {
    id: payload.id,
    value: payload.value,
    isExpance: payload.isExpance,
  };
  await axios.post(
    `https://entriesdis-default-rtdb.firebaseio.com/discription/${val}.json`
  );
}
