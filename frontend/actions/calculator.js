

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const initialState = {
  displayField: '0'
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAR_DISPLAY_FIELD':
      return { ...state, displayField: '0' };
    default:
      return state;
  }
};

const clearDisplayField = () => {
  return { type: 'CLEAR_DISPLAY_FIELD' };
};

const rootReducer = combineReducers({
  calculator: calculatorReducer
});

const store = createStore(rootReducer, applyMiddleware(createLogger()));