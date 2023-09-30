// src/redux/reducers/cartReducer.js

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions/cartActions';

const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case REMOVE_FROM_CART:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    case CLEAR_CART:
      return {};
    default:
      return state;
  }
};

export default cartReducer;
