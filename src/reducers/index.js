import {combineReducers} from 'redux';
import todos from './todos';
//import items from './items';

const rootReducer = combineReducers({todos});

export default rootReducer;
