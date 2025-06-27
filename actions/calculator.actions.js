

package actions/calculatorActions.js

import { UPDATE_DISPLAY_FIELD, PERFORM_CALCULATION } from '../constants/calculatorConstants';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  displayField: '',
  calculationResult: null,
  error: null,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DISPLAY_FIELD:
      return { ...state, displayField: action.payload };
    case PERFORM_CALCULATION:
      return { ...state, calculationResult: action.payload };
    case 'ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const store = createStore(calculatorReducer, applyMiddleware(thunk));

const updateDisplayField = (result) => {
  if (result !== null && result !== undefined) {
    return {
      type: UPDATE_DISPLAY_FIELD,
      payload: result,
    };
  } else {
    return {
      type: 'ERROR',
      payload: 'Invalid result',
    };
  }
};

const performCalculation = (calculation) => {
  return (dispatch) => {
    try {
      const result = eval(calculation);
      dispatch(updateDisplayField(result));
      dispatch({
        type: PERFORM_CALCULATION,
        payload: result,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error.message,
      });
    }
  };
};

export { updateDisplayField, performCalculation };