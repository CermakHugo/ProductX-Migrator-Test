

import React, { useState } from 'react';

const Calculator = () => {
  const [currentEntry, setCurrentEntry] = useState('');
  const [resultText, setResultText] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');
  const [calculationResult, setCalculationResult] = useState('');

  const ToTrimmedString = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const Calculate = () => {
    const result = eval(currentEntry);
    setResultText(ToTrimmedString(result));
  };

  const OnSelectNumber = (number) => {
    setCurrentEntry(currentEntry + number);
  };

  const OnSelectOperator = (operator) => {
    setCurrentEntry(currentEntry + operator);
  };

  const OnClear = () => {
    setCurrentEntry('');
    setResultText('');
  };

  const OnNegative = () => {
    setCurrentEntry(currentEntry * -1);
  };

  const OnPercentage = () => {
    setCurrentEntry(currentEntry / 100);
  };

  const getCalculationResult = () => {
    const result = eval(currentEntry);
    setCalculationResult(ToTrimmedString(result));
  };

  const appendNumberToResult = (number) => {
    setSelectedNumber(selectedNumber + number);
  };

  const selectNumber = (number) => {
    appendNumberToResult(number);
    OnSelectNumber(number);
  };

  const selectOperator = (operator) => {
    OnSelectOperator(operator);
  };

  const clear = () => {
    OnClear();
  };

  const negative = () => {
    OnNegative();
  };

  const percentage = () => {
    OnPercentage();
  };

  const updateSecondNumberAndMathOperator = () => {
    const secondNumber = currentEntry.split(/[-+*/]/)[1];
    const mathOperator = currentEntry.match(/[-+*/]/)[0];
    setCurrentEntry(secondNumber + mathOperator);
  };

  const calculatePercentage = () => {
    const result = eval(currentEntry);
    setCalculationResult(ToTrimmedString(result / 100));
  };

  return (
    <div>
      <input type="text" value={resultText} readOnly />
      <div>
        <button onClick={() => selectNumber(7)}>7</button>
        <button onClick={() => selectNumber(8)}>8</button>
        <button onClick={() => selectNumber(9)}>9</button>
        <button onClick={() => selectOperator('/')}>/</button>
      </div>
      <div>
        <button onClick={() => selectNumber(4)}>4</button>
        <button onClick={() => selectNumber(5)}>5</button>
        <button onClick={() => selectNumber(6)}>6</button>
        <button onClick={() => selectOperator('*')}>*</button>
      </div>
      <div>
        <button onClick={() => selectNumber(1)}>1</button>
        <button onClick={() => selectNumber(2)}>2</button>
        <button onClick={() => selectNumber(3)}>3</button>
        <button onClick={() => selectOperator('-')}>-</button>
      </div>
      <div>
        <button onClick={() => selectNumber(0)}>0</button>
        <button onClick={() => selectNumber('.')}>.</button>
        <button onClick={() => clear()}>C</button>
        <button onClick={() => selectOperator('+')}>+</button>
      </div>
      <div>
        <button onClick={() => negative()}>+/-</button>
        <button onClick={() => percentage()}>%</button>
        <button onClick={() => updateSecondNumberAndMathOperator()}>Update</button>
        <button onClick={() => calculatePercentage()}>Calculate %</button>
      </div>
      <button onClick={() => Calculate()}>=</button>
      <p>Selected Number: {selectedNumber}</p>
      <p>Calculation Result: {calculationResult}</p>
    </div>
  );
};

export default Calculator;