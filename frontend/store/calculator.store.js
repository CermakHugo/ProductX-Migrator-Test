

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import calculatorReducer from '../reducers/calculator.reducer';

const calculatorStore = () => {
    const store = createStore(calculatorReducer, applyMiddleware(thunk));
    return store;
};

const store = calculatorStore();

const CalculatorStoreProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default CalculatorStoreProvider;