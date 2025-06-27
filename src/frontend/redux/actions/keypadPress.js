

import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  keypadPress: '',
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'KEYPAD_PRESS':
      return { ...state, keypadPress: action.payload, error: null };
    case 'KEYPAD_PRESS_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export const keypadPress = (input) => {
  if (!input || typeof input !== 'string') {
    return (dispatch) => {
      dispatch({ type: 'KEYPAD_PRESS_ERROR', payload: 'Invalid input' });
    };
  }

  return (dispatch) => {
    axios.post('/keypadPress', { input })
      .then((response) => {
        if (response.status === 200 && response.data) {
          dispatch({ type: 'KEYPAD_PRESS', payload: response.data });
        } else {
          dispatch({ type: 'KEYPAD_PRESS_ERROR', payload: 'Invalid response from API' });
        }
      })
      .catch((error) => {
        dispatch({ type: 'KEYPAD_PRESS_ERROR', payload: error.message });
      });
  };
};