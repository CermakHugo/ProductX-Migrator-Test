

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import calculatorReducer from './calculate.reducer.js';

const rootReducer = combineReducers({
  calculator: calculatorReducer
});

const initialState = {
  calculator: {}
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;