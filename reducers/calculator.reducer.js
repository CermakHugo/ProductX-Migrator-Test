import { UPDATE_DISPLAY_FIELD, PERFORM_CALCULATION } from '../actions/calculator.actions';
import { createStore, combineReducers } from 'redux';

const initialState = {
  displayField: ''
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DISPLAY_FIELD:
      return { ...state, displayField: action.payload };
    case PERFORM_CALCULATION:
      const calculationResult = eval(action.payload);
      return { ...state, displayField: calculationResult };
    default:
      return state;
  }
};

export default calculatorReducer;