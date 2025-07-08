import React, { useState } from 'react';
import './CalculatorScreen.component.css';

interface CalculatorState {
  currentCalculation: string;
  result: number;
}

const CalculatorScreen: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({ currentCalculation: '', result: 0 });

  const handleNumberClick = (number: number) => {
    setState((prevState) => ({ ...prevState, currentCalculation: prevState.currentCalculation + number }));
  };

  const handleOperatorClick = (operator: string) => {
    setState((prevState) => ({ ...prevState, currentCalculation: prevState.currentCalculation + operator }));
  };

  const handleEqualsClick = () => {
    // Implement calculation logic here
    setState((prevState) => ({ ...prevState, result: prevState.result }));
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
      <button className="clear-button" onClick={handleClearClick}>C</button>
      <button className="negative-button">+/-</button>
      <button className="percentage-button">%</button>
      <button className="number-button" onClick={() => handleNumberClick(7)}>7</button>
      <button className="number-button" onClick={() => handleNumberClick(8)}>8</button>
      <button className="number-button" onClick={() => handleNumberClick(9)}>9</button>
      <button className="operator-button" onClick={() => handleOperatorClick('/')}>/</button>
      <button className="number-button" onClick={() => handleNumberClick(4)}>4</button>
      <button className="number-button" onClick={() => handleNumberClick(5)}>5</button>
      <button className="number-button" onClick={() => handleNumberClick(6)}>6</button>
      <button className="operator-button" onClick={() => handleOperatorClick('*')}>x</button>
      <button className="number-button" onClick={() => handleNumberClick(1)}>1</button>
      <button className="number-button" onClick={() => handleNumberClick(2)}>2</button>
      <button className="number-button" onClick={() => handleNumberClick(3)}>3</button>
      <button className="operator-button" onClick={() => handleOperatorClick('-')}>-</button>
      <button className="number-button" onClick={() => handleNumberClick(0)}>0</button>
      <button className="number-button" onClick={() => handleNumberClick('.')}>.</button>
      <button className="equals-button" onClick={handleEqualsClick}>=</button>
      <button className="operator-button" onClick={() => handleOperatorClick('+')}>+</button>
    </div>
  );
};

export default CalculatorScreen;
