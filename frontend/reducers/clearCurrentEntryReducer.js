

import { createStore, combineReducers } from 'redux';
import { CLEAR_CURRENT_ENTRY } from '../actions/types';

const initialState = {
  currentEntry: null
};

const clearCurrentEntryReducer = (state = initialState, action) => {
  try {
    switch (action.type) {
      case CLEAR_CURRENT_ENTRY:
        return {
          ...state,
          currentEntry: null
        };
      default:
        return state;
    }
  } catch (error) {
    console.error('Error in clearCurrentEntryReducer:', error);
    return state;
  }
};

export default clearCurrentEntryReducer;