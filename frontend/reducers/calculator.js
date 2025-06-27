

import { createStore, combineReducers } from 'redux';
import { CLEAR_DISPLAY_FIELD } from '../actions/types';

const initialState = {
  displayField: ''
};

const calculatorReducer = (state = initialState, action) => {
  if (typeof action.type !== 'string') {
    throw new Error('Action type must be a string');
  }

  if (typeof state !== 'object') {
    throw new Error('State must be an object');
  }

  switch (action.type) {
    case CLEAR_DISPLAY_FIELD:
      return { ...state, displayField: '' };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  calculator: calculatorReducer
});

const store = createStore(rootReducer);

export default calculatorReducer;