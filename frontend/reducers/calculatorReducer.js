

import { combineReducers } from 'redux';
import { GET_CALCULATOR_STATE, performAction } from '../actions/calculatorActions';

const initialState = {
  calculatorState: {},
  error: null,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CALCULATOR_STATE:
      if (action.payload) {
        return {
          ...state,
          calculatorState: action.payload,
          error: null,
        };
      }
      return state;
    case performAction:
      if (action.payload && action.payload.result) {
        return {
          ...state,
          calculatorState: action.payload.result,
          error: null,
        };
      } else if (action.payload && action.payload.error) {
        return {
          ...state,
          calculatorState: {},
          error: action.payload.error,
        };
      }
      return state;
    default:
      return state;
  }
};

export default calculatorReducer;