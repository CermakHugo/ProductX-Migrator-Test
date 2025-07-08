

import React, { useState } from 'react';

interface CalculatorUIProps {
  // Add props if needed
}

const CalculatorUI: React.FC<CalculatorUIProps> = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleEntry1Change = (event: any) => {
    setNumber1(event.target.value);
  };

  const handleEntry2Change = (event: any) => {
    setNumber2(event.target.value);
  };

  const handlePickerChange = (event: any) => {
    setOperation(event.target.value);
  };

  const handleCalculateClick = () => {
    let calculationResult = 0;
  if (number1 !== '' && number2 !== '' && operation !== '') {
    switch (operation) {
      case '+':
        calculationResult = parseFloat(number1) + parseFloat(number2);
        break;
      case '-':
        calculationResult = parseFloat(number1) - parseFloat(number2);
        break;
      case '*':
        calculationResult = parseFloat(number1) * parseFloat(number2);
        break;
      case '/':
        if (parseFloat(number2) !== 0) {
          calculationResult = parseFloat(number1) / parseFloat(number2);
        } else {
          calculationResult = 0;
        }
        break;
      default:
        break;
    }
    setResult(calculationResult.toString());
  } else {
    setResult('Invalid input');
  }
  };

  return (
    <div className="grid-container">
      <div className="header">
        <span id="CurrentCalculation" className="current-calculation">
          {number1} {operation} {number2}
        </span>
      </div>
      <div className="display">
        <span id="resultText" className="result-text">
          {result}
        </span>
      </div>
      <div className="keypad">
        <input type="text" id="entry1" value={number1} onChange={handleEntry1Change} />
        <select id="operation" value={operation} onChange={handlePickerChange}>
          <option value="">Select Operation</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="text" id="entry2" value={number2} onChange={handleEntry2Change} />
        <button id="calculate" onClick={handleCalculateClick}>=</button>
      </div>
    </div>
  );
};

export default CalculatorUI;