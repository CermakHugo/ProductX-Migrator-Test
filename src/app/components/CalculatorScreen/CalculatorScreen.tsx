import React, { useState } from 'react';
import './CalculatorScreen.css';

interface CalculatorScreenProps {
  // Add props if needed
}

const CalculatorScreen: React.FC<CalculatorScreenProps> = () => {
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
    <div className="header">
      <label id="CurrentCalculation" className="current-calculation">{currentCalculation}</label>
      <label id="resultText" className="result-text">{result}</label>
      <div className="separator"></div>
    </div>
    <div className="keypad">
      <div className="number-button-grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <button key={number} className="number-button" onClick={() => handleNumberClick(number.toString())}>{number}</button>
        ))}
      </div>
      <div className="operator-button-grid">
        {[ '+', '-', 'x', '/' ].map((operator) => (
          <button key={operator} className="operator-button" onClick={() => handleOperatorClick(operator)}>{operator}</button>
        ))}
      </div>
      <div className="action-button-grid">
        <button className="equals-button" onClick={handleEqualsClick}>=</button>
        <button className="clear-button" onClick={handleClearClick}>C</button>
        <button className="negative-button">+/-</button>
        <button className="percentage-button">%</button>
      </div>
    </div>
  );
};

export default CalculatorScreen;