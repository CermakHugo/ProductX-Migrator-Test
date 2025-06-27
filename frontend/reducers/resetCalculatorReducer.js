

import { createStore, combineReducers } from 'redux';
import { RESET_CALCULATOR } from '../actions/types';
import calculatorReducer from './calculatorReducer';

const initialState = {
  calculator: calculatorReducer(undefined, { type: '' }),
};

const resetCalculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_CALCULATOR:
      return {
        ...state,
        calculator: calculatorReducer(undefined, { type: '' }),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  resetCalculator: resetCalculatorReducer,
});

const store = createStore(rootReducer);

export default store;