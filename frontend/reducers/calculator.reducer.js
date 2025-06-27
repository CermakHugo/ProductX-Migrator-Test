

import { createStore, combineReducers } from 'redux';
import { calculatorActions } from './calculator.actions';
import { calculatorController } from './calculator.controller';

const calculatorReducer = (state = { entry: '', result: '' }, action) => {
  switch (action.type) {
    case calculatorActions.DISPLAY_RESULT:
      if (action.payload !== undefined) {
        return { ...state, result: action.payload };
      }
      return state;
    case calculatorActions.APPEND_DIGIT:
      if (action.payload !== undefined) {
        return { ...state, entry: action.payload };
      }
      return state;
    case calculatorActions.UPDATE_CALCULATOR_ENTRY:
      if (action.payload !== undefined) {
        return { ...state, entry: action.payload };
      }
      return state;
    case calculatorActions.CLEAR_CALCULATOR_ENTRY:
      return { ...state, entry: '' };
    default:
      return state;
  }
};

const onCalculate = () => {
  const result = calculatorController.onCalculate();
  return { type: calculatorActions.DISPLAY_RESULT, payload: result };
};

const store = createStore(combineReducers({ calculator: calculatorReducer }));

export default store;