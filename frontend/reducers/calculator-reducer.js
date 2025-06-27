

import { combineReducers } from 'redux';

const initialState = {
  calculation: '',
  result: '',
  uiComponents: {
    display: '',
    buttons: [],
  },
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_CALCULATOR':
      return initialState;
    case 'UPDATE_CALCULATION':
      return { ...state, calculation: action.payload };
    case 'UPDATE_RESULT':
      return { ...state, result: action.payload };
    case 'INITIALIZE_UI_COMPONENTS':
      return { ...state, uiComponents: action.payload };
    case 'UPDATE_DISPLAY':
      return { ...state, uiComponents: { ...state.uiComponents, display: action.payload } };
    case 'UPDATE_BUTTONS':
      return { ...state, uiComponents: { ...state.uiComponents, buttons: action.payload } };
    default:
      return state;
  }
};

export default calculatorReducer;