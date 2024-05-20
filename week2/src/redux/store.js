import {createStore} from 'redux';
import todoReducer from './Reducer/Main-reducer';
// createStore(reducer, initStore)
const todolist = [];
const store = createStore(todoReducer, todolist);

export default store;