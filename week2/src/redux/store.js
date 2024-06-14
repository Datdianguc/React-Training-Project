import { createStore, applyMiddleware, combineReducers } from "redux";
import todoReducer from "./Reducer/Main-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux-saga/saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
