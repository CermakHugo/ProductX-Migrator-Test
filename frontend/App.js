

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CalculatorComponent from './CalculatorComponent';
import DisplayField from './DisplayField';
import ClearEntryButton from './ClearEntryButton';
import ResetCalculationButton from './ResetCalculationButton';
import CalculatorUI from './CalculatorUI';
import CalculatorContainer from './CalculatorContainer';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [currentCalculation, setCurrentCalculation] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    setDisplayValue(displayValue + number);
  };

  const handleOperatorClick = (operator) => {
    setCurrentCalculation(currentCalculation + displayValue + operator);
    setDisplayValue('');
  };

  const handleClearEntry = () => {
    setDisplayValue('');
  };

  const handleResetCalculation = () => {
    setCurrentCalculation('');
    setDisplayValue('');
    setResult('');
  };

  const handleEqualsClick = () => {
    const calculation = currentCalculation + displayValue;
    const result = calculateResult(calculation);
    setResult(result);
    setCurrentCalculation('');
    setDisplayValue('');
  };

  const calculateResult = (calculation) => {
    const numbers = calculation.match(/\d+/g).map(Number);
    const operators = calculation.match(/[+*/-]/g);
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
      switch (operators[i]) {
        case '+':
          result += numbers[i + 1];
          break;
        case '-':
          result -= numbers[i + 1];
          break;
        case '*':
          result *= numbers[i + 1];
          break;
        case '/':
          result /= numbers[i + 1];
          break;
        default:
          break;
      }
    }
    return result;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={CalculatorContainer} />
      </Switch>
    </BrowserRouter>
  );
}

const CalculatorContainer = () => {
  return (
    <div>
      <DisplayField value={displayValue} />
      <CalculatorUI
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onEqualsClick={handleEqualsClick}
      />
      <ClearEntryButton onClick={handleClearEntry} />
      <ResetCalculationButton onClick={handleResetCalculation} />
    </div>
  );
};

export default App;