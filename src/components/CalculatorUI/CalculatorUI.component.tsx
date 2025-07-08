

import React, { useState } from 'react';
import Calculator from '../services/Calculator';

const CalculatorUI = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === '=') {
      const calculator = new Calculator();
      const calculationResult = calculator.calculate(num1, num2, operation);
      setResult(calculationResult);
    } else if (buttonValue === 'C') {
      setNum1('');
      setNum2('');
      setOperation('');
      setResult('');
    } else if (['+', '-', '*', '/'].includes(buttonValue)) {
      setOperation(buttonValue);
    } else {
      if (operation === '') {
        setNum1(num1 + buttonValue);
      } else {
        setNum2(num2 + buttonValue);
      }
    }
  };

  return (
    <div>
      <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={() => handleButtonClick('+')}>+</button>
      <button onClick={() => handleButtonClick('-')}>-</button>
      <button onClick={() => handleButtonClick('*')}>*</button>
      <button onClick={() => handleButtonClick('/')}>/</button>
      <button onClick={() => handleButtonClick('=')}>=</button>
      <button onClick={() => handleButtonClick('C')}>C</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default CalculatorUI;