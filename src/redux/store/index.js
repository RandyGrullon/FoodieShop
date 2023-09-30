// src/redux/store/index.js

import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';
import cartReducer from '../reducers/cartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
