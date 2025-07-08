

import React, { useState } from 'react';

interface CalculatorProps {
  // Add any props if required
}

const Calculator: React.FC<CalculatorProps> = () => {
  const [currentCalculation, setCurrentCalculation] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number: string) => {
    setCurrentCalculation(currentCalculation + number);
  };

  const handleOperatorClick = (operator: string) => {
    setCurrentCalculation(currentCalculation + operator);
  };

  const handleEqualsClick = () => {
    try {
      const calculation = currentCalculation;
      const result = eval(calculation);
      setResult(result.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClearClick = () => {
    setCurrentCalculation('');
    setResult('');
  };

  return (
    <div>
      <button onClick={() => handleNumberClick('1')}>1</button>
      <button onClick={() => handleNumberClick('2')}>2</button>
      <button onClick={() => handleNumberClick('3')}>3</button>
      <button onClick={() => handleOperatorClick('+')}>+</button>
      <button onClick={() => handleOperatorClick('-')}>-</button>
      <button onClick={() => handleOperatorClick('*')}>*</button>
      <button onClick={() => handleOperatorClick('/')}>/</button>
      <button onClick={handleEqualsClick}>=</button>
      <button onClick={handleClearClick}>Clear</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;