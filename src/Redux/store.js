import { applyMiddleware, legacy_createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducer";
import rootSaga from "./saga";
const sagaMiddleWare = createSagaMiddleware();
const store = legacy_createStore(rootReducer,applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga)
export default store;