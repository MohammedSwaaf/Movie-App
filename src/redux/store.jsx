import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers/combineReducers';

const middleWare = [thunk];
// const initialState = {};
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));
export default store;