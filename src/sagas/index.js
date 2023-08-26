import * as entriesSaga from "./entriesSaga";
import * as entriesSagaDeletion from "./entriesSagaDeletion";
import * as entriesSagaAdd from "./entriesAddSaga";
//import * as testSaga from "../sagas/testSaga";

export function initSgas(sagaMiddleware) {
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSagaDeletion).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
  Object.values(entriesSagaAdd).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
  // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
