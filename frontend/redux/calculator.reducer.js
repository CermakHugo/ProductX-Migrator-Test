

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { SWITCH_CALCULATOR_TAB } from './calculator.actions';

const calculatorReducer = (state = { tab: 'home' }, action) => {
    switch (action.type) {
        case SWITCH_CALCULATOR_TAB:
            return { ...state, tab: action.payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    calculator: calculatorReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;