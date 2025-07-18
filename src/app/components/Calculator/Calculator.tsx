

import React, { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [mathOperator, setMathOperator] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');
  const [currentCalculation, setCurrentCalculation] = useState('');

  const handleSelectNumber = (number) => {
    if (mathOperator === '') {
      setFirstNumber(firstNumber + number);
    } else {
      setSecondNumber(secondNumber + number);
    }
  };

  const handleSelectOperator = (operator) => {
    setMathOperator(operator);
  };

  const handleClear = () => {
    setFirstNumber('');
    setMathOperator('');
    setSecondNumber('');
    setResult('');
    setCurrentCalculation('');
  };

  const handleNegative = () => {
    if (mathOperator === '') {
      setFirstNumber('-' + firstNumber);
    } else {
      setSecondNumber('-' + secondNumber);
    }
  };

  const handlePercentage = () => {
    if (mathOperator === '') {
      setFirstNumber(firstNumber / 100);
    } else {
      setSecondNumber(secondNumber / 100);
    }
  };

  const handleCalculate = () => {
    let result = 0;
    switch (mathOperator) {
      case '+':
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case '-':
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case '*':
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case '/':
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
      default:
        break;
    }
    setResult(result.toString());
    setCurrentCalculation(`${firstNumber} ${mathOperator} ${secondNumber} = ${result}`);
  };

  const handleToTrimmedString = () => {
    setCurrentCalculation(currentCalculation.trim());
  };

  const handleGetCurrentCalculation = () => {
    // Call GetCurrentCalculation endpoint and display result in Calculator component
  };

  const handleUpdateCurrentCalculation = () => {
    // Call UpdateCurrentCalculation endpoint and display result in Calculator component
  };

  const handleOnSelectNumber = (number) => {
    // Call onSelectNumber method and display result in resultText element
  };

  const handleOnClear = () => {
    // Call onClear method and display result in resultText element
  };

  const handleOnCalculate = () => {
    // Call onCalculate method and display result in resultText element
  };

  const handleOnSelectOperator = (operator) => {
    // Call onSelectOperator method
  };

  return (
    <div>
      <input type="text" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} />
      <input type="text" value={mathOperator} onChange={(e) => setMathOperator(e.target.value)} />
      <input type="text" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} />
      <button onClick={() => handleSelectNumber('7')}>7</button>
      <button onClick={() => handleSelectNumber('8')}>8</button>
      <button onClick={() => handleSelectNumber('9')}>9</button>
      <button onClick={() => handleSelectOperator('+')}>+</button>
      <button onClick={() => handleSelectNumber('4')}>4</button>
      <button onClick={() => handleSelectNumber('5')}>5</button>
      <button onClick={() => handleSelectNumber('6')}>6</button>
      <button onClick={() => handleSelectOperator('-')}>-</button>
      <button onClick={() => handleSelectNumber('1')}>1</button>
      <button onClick={() => handleSelectNumber('2')}>2</button>
      <button onClick={() => handleSelectNumber('3')}>3</button>
      <button onClick={() => handleSelectOperator('*')}>*</button>
      <button onClick={() => handleSelectNumber('0')}>0</button>
      <button onClick={handleNegative}>-</button>
      <button onClick={handlePercentage}>%</button>
      <button onClick={() => handleSelectOperator('/')}>/</button>
      <button onClick={handleClear}>C</button>
      <button onClick={handleCalculate}>=</button>
      <p>Current Calculation: {currentCalculation}</p>
      <p>Result: {result}</p>
      <button onClick={handleToTrimmedString}>To Trimmed String</button>
      <button onClick={handleGetCurrentCalculation}>Get Current Calculation</button>
      <button onClick={handleUpdateCurrentCalculation}>Update Current Calculation</button>
      <button onClick={handleOnSelectNumber}>On Select Number</button>
      <button onClick={handleOnClear}>On Clear</button>
      <button onClick={handleOnCalculate}>On Calculate</button>
      <button onClick={handleOnSelectOperator}>On Select Operator</button>
    </div>
  );
};

export default Calculator;