import { createStore, applyMiddleware } from "redux";
import todoReducer from "./Reducer/Main-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux-saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
