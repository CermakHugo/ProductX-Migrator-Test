

import { createStore, combineReducers } from 'redux';
import { HANDLE_BUTTON_CLICK } from '../actions/calculator.actions';

const initialState = {
  calculation: '',
  display: '0'
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_BUTTON_CLICK:
      const { calculation, display } = action.payload;
      return { ...state, calculation, display };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ calculator: calculatorReducer });

const store = createStore(rootReducer);

export default store;