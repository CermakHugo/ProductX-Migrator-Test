

import { createStore, combineReducers } from 'redux';

const initialState = {
  lockedNumberValue: null,
};

const lockNumberValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOCK_NUMBER_VALUE':
      if (typeof action.payload !== 'number') {
        console.error('Invalid input: action.payload is not a number');
        return state;
      }
      return { ...state, lockedNumberValue: action.payload };
    default:
      return state;
  }
};

export default lockNumberValueReducer;