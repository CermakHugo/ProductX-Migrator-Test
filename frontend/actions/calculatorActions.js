

import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  calculatorState: {}
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CALCULATOR_STATE':
      return { ...state, calculatorState: action.payload };
    case 'PERFORM_ACTION':
      return { ...state, calculatorState: action.payload };
    default:
      return state;
  }
};

const store = createStore(calculatorReducer, applyMiddleware(thunk));

const actionTypes = {
  GET_CALCULATOR_STATE: 'GET_CALCULATOR_STATE',
  PERFORM_ACTION: 'PERFORM_ACTION'
};

export const performAction = (actionData) => {
  return (dispatch) => {
    axios.post('/performAction', actionData)
      .then((response) => {
        if (response.data) {
          dispatch({ type: actionTypes.PERFORM_ACTION, payload: response.data });
        } else {
          console.error('Invalid response data');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getCalculatorState = () => {
  return (dispatch) => {
    axios.get('/GetCalculatorState')
      .then((response) => {
        if (response.data) {
          dispatch({ type: actionTypes.GET_CALCULATOR_STATE, payload: response.data });
        } else {
          console.error('Invalid response data');
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: actionTypes.GET_CALCULATOR_STATE, payload: {} });
      });
  };
};