import React, { useState } from 'react';
import './CalculatorLayout.css';

interface CalculatorLayoutProps {
  // Add props if needed
}

const CalculatorLayout: React.FC<CalculatorLayoutProps> = () => {
  const [currentCalculation, setCurrentCalculation] = useState('');
  const [result, setResult] = useState(0);

  const handleNumberClick = (number: string) => {
    setCurrentCalculation(currentCalculation + number);
  };

  const handleOperatorClick = (operator: string) => {
    setCurrentCalculation(currentCalculation + operator);
  };

  const handleEqualsClick = () => {
    // Implement calculation logic here
    setResult(0);
  };

  const handleClearClick = () => {
    setCurrentCalculation('');
    setResult(0);
  };

  return (
    <div className="grid-container">
      <div className="header">
        <label id="CurrentCalculation" className="current-calculation">{currentCalculation}</label>
        <label id="resultText" className="result-text">{result}</label>
        <div className="separator"></div>
      </div>
      <div className="keypad">
        <div className="keypad-row">
          <button className="clear-button" onClick={handleClearClick}>C</button>
          <button className="negative-button">+/-</button>
          <button className="percentage-button">%</button>
        </div>
        <div className="keypad-row">
          <button className="number-button" onClick={() => handleNumberClick('7')}>7</button>
          <button className="number-button" onClick={() => handleNumberClick('8')}>8</button>
          <button className="number-button" onClick={() => handleNumberClick('9')}>9</button>
          <button className="operator-button" onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        <div className="keypad-row">
          <button className="number-button" onClick={() => handleNumberClick('4')}>4</button>
          <button className="number-button" onClick={() => handleNumberClick('5')}>5</button>
          <button className="number-button" onClick={() => handleNumberClick('6')}>6</button>
          <button className="operator-button" onClick={() => handleOperatorClick('x')}>x</button>
        </div>
        <div className="keypad-row">
          <button className="number-button" onClick={() => handleNumberClick('1')}>1</button>
          <button className="number-button" onClick={() => handleNumberClick('2')}>2</button>
          <button className="number-button" onClick={() => handleNumberClick('3')}>3</button>
          <button className="operator-button" onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="keypad-row">
          <button className="number-button" onClick={() => handleNumberClick('0')}>0</button>
          <button className="equals-button" onClick={handleEqualsClick}>=</button>
          <button className="operator-button" onClick={() => handleOperatorClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorLayout;
