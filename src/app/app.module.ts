

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Calculator from './Calculator';
import CalculatorScreen from './CalculatorScreen';
import CalculatorMainPage from './CalculatorMainPage';
import CalculatorUI from './CalculatorUI';
import CalculatorService from './CalculatorService';
import MauiProgramService from './MauiProgramService';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Calculator />
    <CalculatorScreen />
    <CalculatorMainPage />
    <CalculatorUI />
  </React.StrictMode>,
  rootElement
);