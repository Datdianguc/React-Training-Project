import {createStore, applyMiddleware} from 'redux';
import todoReducer from './Reducer/Main-reducer';
// createStore(reducer, initStore)
// const middlewarEnhancer = applyMiddleware

const store = createStore(todoReducer, );

export default store;