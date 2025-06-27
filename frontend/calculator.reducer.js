

import { combineReducers } from 'redux';

const initialState = {
  result: 0,
  history: [],
  error: null,
  isLoading: false,
  isHistoryVisible: false
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      if (typeof action.payload !== 'number') {
        return { ...state, error: 'Invalid payload' };
      }
      return {
        ...state,
        result: state.result + action.payload,
        history: [...state.history, `Added ${action.payload}`],
        error: null
      };
    case 'SUBTRACT':
      if (typeof action.payload !== 'number') {
        return { ...state, error: 'Invalid payload' };
      }
      return {
        ...state,
        result: state.result - action.payload,
        history: [...state.history, `Subtracted ${action.payload}`],
        error: null
      };
    case 'MULTIPLY':
      if (typeof action.payload !== 'number') {
        return { ...state, error: 'Invalid payload' };
      }
      return {
        ...state,
        result: state.result * action.payload,
        history: [...state.history, `Multiplied by ${action.payload}`],
        error: null
      };
    case 'DIVIDE':
      if (typeof action.payload !== 'number' || action.payload === 0) {
        return { ...state, error: 'Invalid payload' };
      }
      return {
        ...state,
        result: state.result / action.payload,
        history: [...state.history, `Divided by ${action.payload}`],
        error: null
      };
    case 'RESET':
      return initialState;
    case 'TOGGLE_HISTORY':
      return { ...state, isHistoryVisible: !state.isHistoryVisible };
    case 'LOADING_START':
      return { ...state, isLoading: true };
    case 'LOADING_END':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  calculator: calculatorReducer
});

export default rootReducer;