import {
  take,
  put,
  delay,
  call,
  fork,
  takeEvery,
  cancelled,
  takeLatest,
} from "redux-saga/effects";

function dobule(number) {
  return number * 2;
}

export function* testSaga() {
  console.log("I am saga function");
  const state = yield take("TEST_MESSAGE");
  const a = yield call(dobule, 2);
  console.log("finish saga function", a);
  const b = yield dobule(3);
  console.log("finish saga function", b);
}

function* doNothing() {
  console.log("I have been called");
  yield delay(1000);
  console.log("I am doing nothing");
}

export function* testSagaFork() {
  while (true) {
    const rcd = yield take("TEST_MESSAGE2");
    yield delay(5000);
    yield fork(doNothing);
    yield fork(doNothing);
    yield fork(doNothing);
    console.log("___", rcd);
  }
}

function* testSagaTakeEveryProcess({ payload }) {
  console.log("start takeEvery ->", payload);
  yield delay(2000);
  console.log("ending takeEvery ->", payload);
}

export function* testSagaTakeEvery() {
  yield takeEvery("TEST_MESSAGE3", testSagaTakeEveryProcess);
}

export function* dispatchTest() {
  let index = 0;
  // yield put({ type: "TEST_MESSAGE5", payload: index });
  while (true) {
    yield delay(5000);
    yield put({ type: "TEST_MESSAGE5", payload: index });
    index++;
  }
}

export function* testSagaCanselled() {
  yield fork(infinitySaga);
}

// export function* testSagaTakeLatest() {
//   yield takeLatest("TEST_MESSAGE4", infinitySaga);
// }

function* infinitySaga() {
  console.log("infinitySaga staart");
  let i = 0;
  while (true) {
    i++;
    try {
      console.log("infinity loop", i);
      yield delay(1000);
    } catch (err) {
      console.log("erroe ioccer", err.message);
    } finally {
      console.log("the fork was canseled ?", yield cancelled());
    }
  }
  // console.log("end call");
}

export function* testSagaCancelled() {
  yield take("TEST_MESSAGE4");
  const handilCanseled = yield fork(infinitySaga);
  yield delay(300);
  yield canseled(handilCanseled);
}

export function* testSagaTakeLatest() {
  yield take("TEST_MESSAGE5", infinitySaga);
}
