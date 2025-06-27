

import { combineReducers } from 'redux';
import axios from 'axios';

const initialState = {
  calculation: '',
  result: '',
  error: null,
};

const keypadPressReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'KEYPAD_PRESS':
      return { ...state, calculation: action.payload };
    case 'KEYPAD_PRESS_RESULT':
      return { ...state, result: action.payload };
    case 'KEYPAD_PRESS_ERROR':
      return { ...state, error: action.payload };
    case 'KEYPAD_PRESS_API_CALL':
      axios.post('/keypadPress', { calculation: state.calculation })
        .then(response => {
          return { ...state, result: response.data };
        })
        .catch(error => {
          return { ...state, error: error.message };
        });
      return state;
    default:
      return state;
  }
};

const reducer = combineReducers({
  keypadPress: keypadPressReducer,
});

export default reducer;