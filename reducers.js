

package reducers;

import { UPDATE_VISUAL_STATE, RESET_VISUAL_STATE } from '../actions';

const initialState = {
  visualStates: []
};

const visualStateGroupReducer = (state = initialState, action) => {
  if (typeof state !== 'object') {
    throw new Error('Initial state must be an object');
  }

  switch (action.type) {
    case UPDATE_VISUAL_STATE:
      if (!Array.isArray(action.payload)) {
        throw new Error('Payload for UPDATE_VISUAL_STATE must be an array');
      }
      return { ...state, visualStates: action.payload };
    case RESET_VISUAL_STATE:
      return initialState;
    default:
      throw new Error(`Unexpected action type: ${action.type}`);
  }
};

export default visualStateGroupReducer;