import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import entriestype from "../actions/entries.actions";

export function* deleteEntriesSaga() {
  while (true) {
    const { payload } = yield take(entriestype.DELETE_ENTRY);
    yield call(deleteEntie, payload.id);
    yield put(deletFromRedux(payload.id));
    // yield put({
    //   type: "DELETE_ENTRY_RESULT",
    //   payload: { id: payload.id },
    // });
  }
}

function deletFromRedux(id) {
  return { type: entriestype.DELETE_ENTRY_RESULT, payload: { id } };
}

async function deleteEntie(id) {
  await axios.delete(
    `https://entriesdis-default-rtdb.firebaseio.com/discription/${id}.json`
  );
  await axios.delete(
    `https://entriesvalue-default-rtdb.firebaseio.com/values/${id}.json`
  );
}
