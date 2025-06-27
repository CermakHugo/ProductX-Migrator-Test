

import { actionTypes } from '../actions/timeActions';

const initialState = {
  time: null,
};

const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TIME:
      if (typeof action.payload === 'string') {
        try {
          return { ...state, time: action.payload };
        } catch (error) {
          console.error('Error updating time state:', error);
          return state;
        }
      } else {
        console.error('Invalid payload type:', typeof action.payload);
        return state;
      }
    default:
      return state;
  }
};

export default timeReducer;