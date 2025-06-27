

import { GET_RESULT } from '../actions/types';
import logger from '../utils/logger';

const initialState = {
  result: 0,
  error: null
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULT:
      if (action.payload === undefined || action.payload === null) {
        logger.error('Invalid payload received for GET_RESULT action');
        return {
          ...state,
          error: 'Invalid payload'
        };
      }
      try {
        const result = action.payload;
        return {
          ...state,
          result,
          error: null
        };
      } catch (error) {
        logger.error('Error occurred during calculation:', error);
        return {
          ...state,
          error: 'Calculation error'
        };
      }
    default:
      return state;
  }
};

export default calculatorReducer;