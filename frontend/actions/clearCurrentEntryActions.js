

import axios from 'axios';
import { CLEAR_CURRENT_ENTRY } from './types';

export const clearCurrentEntry = (currentEntry) => (dispatch) => {
  if (currentEntry === null || currentEntry === undefined) {
    console.error('Current entry is null or undefined');
    return;
  }

  axios.post('/clearCurrentEntry', currentEntry)
    .then((res) => {
      if (res.data === null || res.data === undefined) {
        console.error('Invalid response from API endpoint');
        return;
      }

      dispatch({
        type: CLEAR_CURRENT_ENTRY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};