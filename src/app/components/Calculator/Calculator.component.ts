

import React, { useState } from 'react';

interface CalculatorState {
  currentCalculation: string;
  result: number;
}

const Calculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({ currentCalculation: '', result: 0 });

  const ToTrimmedString = (target: number, decimalFormat: string): string => {
    let result = target.toString(decimalFormat);
    if (result.includes('.')) {
      result = result.replace(/0+$/, '');
      if (result.endsWith('.')) {
        result = result.replace(/\.$/, '');
      }
    }
    return result;
  };

  const Calculate = (value1: number, value2: number, mathOperator: string): number => {
    switch (mathOperator) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case 'x':
        return value1 * value2;
      case '/':
        if (value2 === 0) {
          throw new Error('Cannot divide by zero');
        }
        return value1 / value2;
      default:
        return 0;
    }
  };

  const handleNumberClick = (number: string) => {
    setState({ ...state, currentCalculation: state.currentCalculation + number });
  };

  const handleOperatorClick = (operator: string) => {
    setState({ ...state, currentCalculation: state.currentCalculation + operator });
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(state.currentCalculation);
      setState({ ...state, result: result, currentCalculation: '' });
    } catch (error) {
      setState({ ...state, result: 0, currentCalculation: '' });
    }
  };

  const handleClearClick = () => {
    setState({ currentCalculation: '', result: 0 });
  };

  return (
    <div className="header">
      <span id="CurrentCalculation" className="current-calculation">{state.currentCalculation}</span>
      <span id="resultText" className="result-text">{state.result}</span>
      <div className="separator"></div>
    </div>
    <div className="keypad">
      <button className="number-button" onClick={() => handleNumberClick('0')}>0</button>
      <button className="number-button" onClick={() => handleNumberClick('1')}>1</button>
      <button className="number-button" onClick={() => handleNumberClick('2')}>2</button>
      <button className="number-button" onClick={() => handleNumberClick('3')}>3</button>
      <button className="number-button" onClick={() => handleNumberClick('4')}>4</button>
      <button className="number-button" onClick={() => handleNumberClick('5')}>5</button>
      <button className="number-button" onClick={() => handleNumberClick('6')}>6</button>
      <button className="number-button" onClick={() => handleNumberClick('7')}>7</button>
      <button className="number-button" onClick={() => handleNumberClick('8')}>8</button>
      <button className="number-button" onClick={() => handleNumberClick('9')}>9</button>
      <button className="operator-button" onClick={() => handleOperatorClick('+')}>+</button>
      <button className="operator-button" onClick={() => handleOperatorClick('-')}>-</button>
      <button className="operator-button" onClick={() => handleOperatorClick('*')}>x</button>
      <button className="operator-button" onClick={() => handleOperatorClick('/')}>/</button>
      <button className="equals-button" onClick={handleEqualsClick}>=</button>
      <button className="clear-button" onClick={handleClearClick}>C</button>
      <button className="negative-button">+/-</button>
      <button className="percentage-button">%</button>
    </div>
  );
};

export default Calculator;