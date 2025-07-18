

import React, { useState } from 'react';
import './Calculator.css';

interface CalculatorProps {
  // Add props if needed
}

const Calculator: React.FC<CalculatorProps> = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [mathOperator, setMathOperator] = useState('');
  const [currentState, setCurrentState] = useState(0);
  const [decimalFormat, setDecimalFormat] = useState('');
  const [currentEntry, setCurrentEntry] = useState('');
  const [resultText, setResultText] = useState('0');
  const [pressed, setPressed] = useState('');

  const toTrimmedString = async () => {
    const response = await fetch('/api/toTrimmedString', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ target: currentEntry, decimalFormat }),
    });
    const result = await response.text();
    return result;
  };

  const calculate = async () => {
    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value1: firstNumber, value2: secondNumber, mathOperator }),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const onCalculate = () => {
    const calculation = `${firstNumber} ${mathOperator} ${secondNumber}`;
    document.getElementById('CurrentCalculation').textContent = calculation;
  };

  const onSelectNumber = (number) => {
    setCurrentEntry((prevEntry) => prevEntry + number);
    setResultText((prevResult) => (currentState === 0 ? number : prevResult + number));
  };

  const onClear = () => {
    setFirstNumber(0);
    setSecondNumber(0);
    setCurrentState(0);
    setDecimalFormat('');
    setResultText('0');
    setCurrentEntry('');
  };

  const onNegative = () => {
    setSecondNumber(-secondNumber);
    setMathOperator(mathOperator === '-' ? '+' : '-');
    onCalculate();
  };

  const onPercentage = () => {
    setSecondNumber(secondNumber / 100);
    setMathOperator('%');
    lockNumberValue();
    onCalculate();
  };

  const lockNumberValue = () => {
    setFirstNumber(parseFloat(resultText));
    setCurrentEntry('');
  };

  const onSelectOperator = (operator) => {
    lockNumberValue();
    setCurrentState(-2);
    setMathOperator(operator);
  };

  const getCurrentCalculation = async () => {
    const response = await fetch('/api/getCurrentCalculation');
    const result = await response.json();
    return result;
  };

  const updateCurrentCalculation = async (calculation) => {
    const response = await fetch('/api/updateCurrentCalculation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ calculation }),
    });
    const result = await response.json();
    return result;
  };

  const calculatePercentage = async () => {
    const response = await fetch('/api/calculatePercentage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: firstNumber }),
    });
    const result = await response.json();
    return result;
  };

  const selectNumber = (number) => {
    onSelectNumber(number);
  };

  const selectOperator = (operator) => {
    onSelectOperator(operator);
  };

  const clear = () => {
    onClear();
  };

  const negative = () => {
    onNegative();
  };

  const percentage = () => {
    onPercentage();
  };

  const calculateResult = async () => {
    const result = await calculate();
    if (result !== null) {
      setResultText(result.toString());
    }
  };

  return (
    <div className="grid-container">
      <Header id="header" className="header">
        <span id="CurrentCalculation" className="current-calculation"></span>
        <span id="resultText" className="result-text">
          {resultText}
        </span>
        <div className="separator"></div>
      </Header>
      <Keypad id="keypad" className="keypad">
        <button className="number-button" onClick={() => selectNumber('0')}>
          0
        </button>
        <button className="number-button" onClick={() => selectNumber('1')}>
          1
        </button>
        <button className="number-button" onClick={() => selectNumber('2')}>
          2
        </button>
        <button className="number-button" onClick={() => selectNumber('3')}>
          3
        </button>
        <button className="number-button" onClick={() => selectNumber('4')}>
          4
        </button>
        <button className="number-button" onClick={() => selectNumber('5')}>
          5
        </button>
        <button className="number-button" onClick={() => selectNumber('6')}>
          6
        </button>
        <button className="number-button" onClick={() => selectNumber('7')}>
          7
        </button>
        <button className="number-button" onClick={() => selectNumber('8')}>
          8
        </button>
        <button className="number-button" onClick={() => selectNumber('9')}>
          9
        </button>
        <button className="operator-button" onClick={() => selectOperator('+')}>
          +
        </button>
        <button className="operator-button" onClick={() => selectOperator('-')}>
          -
        </button>
        <button className="operator-button" onClick={() => selectOperator('*')}>
          x
        </button>
        <button className="operator-button" onClick={() => selectOperator('/')}>
          /
        </button>
        <button className="equals-button" onClick={calculateResult}>
          =
        </button>
        <button className="clear-button" onClick={clear}>
          C
        </button>
        <button className="negative-button" onClick={negative}>
          +/-{' '}
        </button>
        <button className="percentage-button" onClick={percentage}>
          %
        </button>
      </Keypad>
    </div>
  );
};

export default Calculator;