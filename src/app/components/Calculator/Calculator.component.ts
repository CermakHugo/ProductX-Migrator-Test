

import React, { useState } from 'react';

interface CalculatorProps {
  // Add props if needed
}

const Calculator: React.FC<CalculatorProps> = () => {
  const [currentCalculation, setCurrentCalculation] = useState('');
  const [result, setResult] = useState('0');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('');

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
    if (operation === '') {
      setNumber1(number1 + number);
      setCurrentCalculation(currentCalculation + number);
    } else {
      setNumber2(number2 + number);
      setCurrentCalculation(currentCalculation + number);
    }
  };

  const handleOperatorClick = (operator: string) => {
    if (operation === '') {
      setOperation(operator);
      setCurrentCalculation(currentCalculation + operator);
    }
  };

  const handleEqualsClick = () => {
    if (number1 !== '' && number2 !== '') {
      try {
        const result = Calculate(parseFloat(number1), parseFloat(number2), operation);
        setResult(ToTrimmedString(result, '2'));
        setCurrentCalculation('');
        setNumber1('');
        setNumber2('');
        setOperation('');
      } catch (error) {
        setResult('Error');
      }
    }
  };

  const handleClearClick = () => {
    setCurrentCalculation('');
    setResult('0');
    setNumber1('');
    setNumber2('');
    setOperation('');
  };

  const handleCalculate = () => {
    if (number1 !== '' && number2 !== '' && operation !== '') {
      try {
        const result = Calculate(parseFloat(number1), parseFloat(number2), operation);
        setResult(ToTrimmedString(result, '2'));
      } catch (error) {
        setResult('Error');
      }
    }
  };

  return (
    <div className="header">
      <span id="CurrentCalculation" className="current-calculation">{currentCalculation}</span>
      <span id="resultText" className="result-text">{result}</span>
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
      <button className="operator-button" onClick={() => handleOperatorClick('x')}>x</button>
      <button className="operator-button" onClick={() => handleOperatorClick('/')}>/</button>
      <button className="equals-button" onClick={handleEqualsClick}>=</button>
      <button className="clear-button" onClick={handleClearClick}>C</button>
      <button className="negative-button" onClick={() => handleNumberClick('+/-')}>+/-</button>
      <button className="percentage-button" onClick={() => handleNumberClick('%')}>%</button>
    </div>
  );
};

export default Calculator;