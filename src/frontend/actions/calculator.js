


import { createStore, combineReducers } from 'redux';

export const APPEND_OPERATOR = 'APPEND_OPERATOR';

export function appendOperator(operator) {
  return { type: APPEND_OPERATOR, operator };
}

const initialState = {
  operator: '',
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_OPERATOR:
      return { ...state, operator: action.operator };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

const store = createStore(rootReducer);

export default store;
