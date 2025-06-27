

import { createStore, combineReducers } from 'redux';
import percentageActions from '../actions/percentageActions';

const initialState = {
  percentage: 0,
  amount: 0,
  result: 0,
};

const calculateResult = (state) => {
  const { amount, percentage } = state;
  return (amount * percentage) / 100;
};

const percentageReducer = (state = initialState, action) => {
  switch (action.type) {
    case percentageActions.SET_PERCENTAGE:
      return { ...state, percentage: action.payload };
    case percentageActions.SET_AMOUNT:
      return { ...state, amount: action.payload };
    case percentageActions.CALCULATE_RESULT:
      return { ...state, result: calculateResult(state) };
    default:
      return state;
  }
};

export default percentageReducer;