

package backend;

import express from 'express';
import { createStore, combineReducers } from 'redux';

const app = express();

const initialState = {
    visualState: {}
};

const visualStateGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VISUAL_STATE':
            return { ...state, visualState: action.payload };
        case 'RESET_VISUAL_STATE':
            return { ...state, visualState: {} };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    visualStateGroup: visualStateGroupReducer
});

const store = createStore(rootReducer);

const visualStateGroup = () => {
    app.get('/visual-state-group', (req, res) => {
        res.json(store.getState().visualStateGroup);
    });

    app.post('/visual-state-group', (req, res) => {
        store.dispatch({ type: 'UPDATE_VISUAL_STATE', payload: req.body });
        res.json(store.getState().visualStateGroup);
    });

    app.delete('/visual-state-group', (req, res) => {
        store.dispatch({ type: 'RESET_VISUAL_STATE' });
        res.json(store.getState().visualStateGroup);
    });
};

export default visualStateGroup;