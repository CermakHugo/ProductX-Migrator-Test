

import { createStore, combineReducers } from 'redux';

const initialState = {
  preferences: {
    counter: 0
  }
};

const preferencesReducer = (state = initialState.preferences, action) => {
  if (typeof action.type !== 'string') {
    throw new Error('Action type must be a string');
  }

  if (typeof state !== 'object') {
    throw new Error('State must be an object');
  }

  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  preferences: preferencesReducer
});

const store = createStore(rootReducer);

export default store;