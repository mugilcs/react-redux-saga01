import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import entriesReducers from "../reducers/entries.reducers";
import modalsReducer from "../reducers/modals.reducer";
import createSagaMiddleware from "redux-saga";
import { initSgas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configStore = () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducers,
      modals: modalsReducer,
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  // sagaMiddleware.run(testSaga);

  initSgas(sagaMiddleware);

  return store;
};

export default configStore;
