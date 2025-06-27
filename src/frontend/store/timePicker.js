

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

const initialState = {
  hour: 0,
  minute: 0,
  second: 0,
};

const timePickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_HOUR':
      return { ...state, hour: action.payload };
    case 'UPDATE_MINUTE':
      return { ...state, minute: action.payload };
    case 'UPDATE_SECOND':
      return { ...state, second: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  timePicker: timePickerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export const updateHour = (hour) => {
  store.dispatch({ type: 'UPDATE_HOUR', payload: hour });
};

export const updateMinute = (minute) => {
  store.dispatch({ type: 'UPDATE_MINUTE', payload: minute });
};

export const updateSecond = (second) => {
  store.dispatch({ type: 'UPDATE_SECOND', payload: second });
};

const TimePickerApp = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>TimePicker App</h1>
        <p>Hour: {store.getState().timePicker.hour}</p>
        <p>Minute: {store.getState().timePicker.minute}</p>
        <p>Second: {store.getState().timePicker.second}</p>
        <button onClick={() => updateHour(1)}>Update Hour</button>
        <button onClick={() => updateMinute(1)}>Update Minute</button>
        <button onClick={() => updateSecond(1)}>Update Second</button>
      </div>
    </Provider>
  );
};

ReactDOM.render(<TimePickerApp />, document.getElementById('root'));

export default store;