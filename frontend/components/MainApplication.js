

import React, { useState } from 'react';
import Calculator from './Calculator';

const MainApplication = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState(null);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleNumber = (e) => {
    if (operator === null) {
      setNum1(num1 + e.target.value);
      setInput(input + e.target.value);
    } else {
      setNum2(num2 + e.target.value);
      setInput(input + e.target.value);
    }
  };

  const handleOperator = (e) => {
    setOperator(e.target.value);
    setInput(input + e.target.value);
  };

  const handleEquals = () => {
    try {
      let calculation;
      switch (operator) {
        case '+':
          calculation = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          calculation = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          calculation = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          calculation = parseFloat(num1) / parseFloat(num2);
          break;
        default:
          throw new Error('Invalid operator');
      }
      setResult(calculation);
      setInput('');
      setOperator(null);
      setNum1('');
      setNum2('');
    } catch (e) {
      setResult('Error');
      setInput('');
      setOperator(null);
      setNum1('');
      setNum2('');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
    setOperator(null);
    setNum1('');
    setNum2('');
  };

  return (
    <div>
      <Calculator
        input={input}
        result={result}
        handleNumber={handleNumber}
        handleOperator={handleOperator}
        handleEquals={handleEquals}
        handleClear={handleClear}
      />
    </div>
  );
};

export default MainApplication;