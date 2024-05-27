import {createStore} from 'redux';
import todoReducer from './Reducer/Main-reducer';
// createStore(reducer, initStore)

const store = createStore(todoReducer, );

export default store;