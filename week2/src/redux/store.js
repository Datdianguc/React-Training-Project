import {createStore} from 'redux';
import rootReducer from './Reducer/Main-reducer';

const store = createStore(rootReducer);

export default store;