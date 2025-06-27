

import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { 
    CALCULATE_ENTRY, 
    UPDATE_DISPLAY_FIELD, 
    CLEAR_CURRENT_ENTRY 
} from './types';

const store = createStore((state = {}) => state, applyMiddleware(thunk));

const calculateEntry = (currentEntry) => async (dispatch) => {
    try {
        const response = await axios.post('/calculate', { currentEntry });
        if (response.data && response.data.result) {
            dispatch({ type: CALCULATE_ENTRY, payload: response.data.result });
        } else {
            dispatch({ type: CALCULATE_ENTRY, payload: 'Error: Invalid response data' });
        }
    } catch (error) {
        dispatch({ type: CALCULATE_ENTRY, payload: 'Error: ' + error.message });
    }
};

const updateDisplayField = (currentEntry) => (dispatch) => {
    dispatch({ type: UPDATE_DISPLAY_FIELD, payload: currentEntry });
};

const clearCurrentEntry = () => (dispatch) => {
    dispatch({ type: CLEAR_CURRENT_ENTRY });
};

export { calculateEntry, updateDisplayField, clearCurrentEntry };