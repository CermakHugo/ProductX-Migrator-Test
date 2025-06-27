

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  percentage: 0,
  userInput: {
    value1: 0,
    value2: 0,
  },
};

const percentageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CALCULATE_PERCENTAGE':
      return { ...state, percentage: action.payload };
    case 'UPDATE_USER_INPUT':
      return { ...state, userInput: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  percentage: percentageReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const calculatePercentage = (value1, value2) => {
  return (dispatch) => {
    if (value2 === 0) {
      throw new Error('Cannot divide by zero');
    }
    const percentage = (value1 / value2) * 100;
    dispatch({ type: 'CALCULATE_PERCENTAGE', payload: percentage });
  };
};

export const updateUserInput = (value1, value2) => {
  return (dispatch) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Invalid input');
    }
    dispatch({ type: 'UPDATE_USER_INPUT', payload: { value1, value2 } });
  };
};