

import { createStore, combineReducers } from 'redux';
import _ from 'lodash';
import * as actions from './calculate.actions';

const initialState = {
  currentEntry: '',
  result: ''
};

const calculateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_CURRENT_ENTRY:
      return _.assign({}, state, { currentEntry: action.payload });
    case actions.CLEAR_CURRENT_ENTRY:
      return _.assign({}, state, { currentEntry: '' });
    case actions.CALCULATE_RESULT:
      return _.assign({}, state, { result: action.payload });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  calculate: calculateReducer
});

const store = createStore(rootReducer);