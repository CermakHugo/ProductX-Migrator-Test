

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import PercentageCalculator from './PercentageCalculator';
import Calculator from './Calculator';
import Calculate from './Calculate';
import CalculatorContainer from './CalculatorContainer';
import App from './App';
import ClearEntryButton from './ClearEntryButton';
import CalculatorComponent from './CalculatorComponent';
import CalculatorUI from './CalculatorUI';
import ResetCalculationButton from './ResetCalculationButton';

class CalculatorInstance extends Calculator {}

const calculatorInstance = new CalculatorInstance();

if (typeof store !== 'undefined' && store !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <App>
        <PercentageCalculator />
        <Calculator />
        <Calculate />
        <CalculatorContainer>
          <CalculatorComponent />
          <CalculatorUI />
          <ClearEntryButton />
          <ResetCalculationButton />
        </CalculatorContainer>
        {calculatorInstance.render()}
      </App>,
    </Provider>,
    document.getElementById('root')
  );
} else {
  console.error('Redux store is not defined or is null');
}