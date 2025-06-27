

import { combineReducers } from 'redux';

const initialState = {
  currentEntry: '',
  result: '',
  operator: ''
};

const tabbedPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_ENTRY':
      return { ...state, currentEntry: action.payload };
    case 'UPDATE_RESULT':
      return { ...state, result: action.payload };
    case 'UPDATE_OPERATOR':
      return { ...state, operator: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tabbedPage: tabbedPageReducer
});

export default rootReducer;