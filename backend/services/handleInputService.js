

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  currentEntry: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_ENTRY':
      return { ...state, currentEntry: action.payload };
    default:
      return state;
  }
};

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const handleInput = (input) => {
  store.dispatch({ type: 'UPDATE_CURRENT_ENTRY', payload: input });
};

export default handleInput;