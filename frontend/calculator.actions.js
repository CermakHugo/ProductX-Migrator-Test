

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ADD_NUMBER, ADD_OPERATOR, CLEAR, DELETE, EQUAL } from './calculator.constants';

const initialState = {
  numbers: [],
  operators: [],
  result: 0,
  error: null,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, numbers: [...state.numbers, action.payload] };
    case ADD_OPERATOR:
      return { ...state, operators: [...state.operators, action.payload] };
    case CLEAR:
      return initialState;
    case DELETE:
      return {
        ...state,
        numbers: state.numbers.slice(0, -1),
        operators: state.operators.slice(0, -1),
      };
    case EQUAL:
      try {
        const expression = state.numbers.join('') + state.operators.join('');
        const result = eval(expression);
        return { ...state, result, numbers: [], operators: [] };
      } catch (error) {
        return { ...state, error: error.message };
      }
    default:
      return state;
  }
};

const store = createStore(calculatorReducer, applyMiddleware(thunk));

export const addNumber = (number) => (dispatch) => {
  dispatch({ type: ADD_NUMBER, payload: number });
};

export const addOperator = (operator) => (dispatch) => {
  dispatch({ type: ADD_OPERATOR, payload: operator });
};

export const clear = () => (dispatch) => {
  dispatch({ type: CLEAR });
};

export const deleteNumber = () => (dispatch) => {
  dispatch({ type: DELETE });
};

export const equal = () => (dispatch) => {
  dispatch({ type: EQUAL });
};

export default store;