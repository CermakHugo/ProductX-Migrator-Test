

import { createStore, combineReducers } from 'redux';

export const ON_NEGATIVE_BUTTON_CLICK = 'ON_NEGATIVE_BUTTON_CLICK';

const initialState = {
  isNegativeButtonClicked: false
};

const onNegativeButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_NEGATIVE_BUTTON_CLICK:
      return { ...state, isNegativeButtonClicked: true };
    default:
      return state;
  }
};

export const onNegativeButtonClick = () => {
  return {
    type: ON_NEGATIVE_BUTTON_CLICK
  };
};

const rootReducer = combineReducers({
  onNegativeButton: onNegativeButtonReducer
});

const store = createStore(rootReducer);

export default store;