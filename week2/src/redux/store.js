import { createStore, applyMiddleware } from "redux";
import todoReducer from "./Reducer/Main-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga, { mySaga, helloSaga } from "./redux-saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(helloSaga);

const action = (type) => store.dispatch({ type });

sagaMiddleware.run(rootSaga);

export default store;
