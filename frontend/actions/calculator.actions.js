

import axios from 'axios@0.21.1';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import calculatorReducer from './calculator.reducer';
import calculatorService from './calculator.service';

const store = createStore(calculatorReducer, applyMiddleware(thunk));

export const DISPLAY_RESULT = 'DISPLAY_RESULT';
export const CLEAR_CALCULATOR_ENTRY = 'CLEAR_CALCULATOR_ENTRY';
export const ON_CALCULATE = 'ON_CALCULATE';

export const onCalculate = (inputValues, operator) => {
  return (dispatch) => {
    dispatch({
      type: ON_CALCULATE,
      payload: { inputValues, operator },
    });
  };
};

export const displayResult = () => {
  return (dispatch) => {
    axios.get('/DisplayResult')
      .then((response) => {
        dispatch({
          type: DISPLAY_RESULT,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const appendDigit = (digit) => {
  return (dispatch) => {
    axios.post('/append-digit', { digit })
      .then((response) => {
        dispatch({
          type: 'APPEND_DIGIT',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const updateCalculatorEntry = (newDigitOrOperator) => {
  return (dispatch) => {
    axios.post('/updateCalculatorEntry', { newDigitOrOperator })
      .then((response) => {
        dispatch({
          type: 'UPDATE_CALCULATOR_ENTRY',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const clearCalculatorEntry = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_CALCULATOR_ENTRY,
    });
  };
};