import {combineReducers} from 'redux';
import searchReducers from './searchReducers';
// for all reducers
export default combineReducers ({
    search : searchReducers
})