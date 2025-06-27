

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { performCalculation } from '../calculate.service';

const Calculate = ({ dispatch }) => {
  const [currentEntry, setCurrentEntry] = useState('');
  const [result, setResult] = useState('');

  const handleNumberInput = (number) => {
    setCurrentEntry(currentEntry + number);
  };

  const handleOperatorInput = (operator) => {
    setCurrentEntry(currentEntry + operator);
  };

  const handlePercentageInput = () => {
    setCurrentEntry(currentEntry + '%');
  };

  const handleClearInput = () => {
    setCurrentEntry('');
    setResult('');
  };

  const handleCalculate = () => {
    const calculationResult = performCalculation(currentEntry);
    setResult(calculationResult);
  };

  return (
    <div>
      <input type="text" value={currentEntry} readOnly />
      <input type="text" value={result} readOnly />
      <div>
        <button onClick={() => handleNumberInput('7')}>7</button>
        <button onClick={() => handleNumberInput('8')}>8</button>
        <button onClick={() => handleNumberInput('9')}>9</button>
        <button onClick={() => handleOperatorInput('/')}>/</button>
      </div>
      <div>
        <button onClick={() => handleNumberInput('4')}>4</button>
        <button onClick={() => handleNumberInput('5')}>5</button>
        <button onClick={() => handleNumberInput('6')}>6</button>
        <button onClick={() => handleOperatorInput('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleNumberInput('1')}>1</button>
        <button onClick={() => handleNumberInput('2')}>2</button>
        <button onClick={() => handleNumberInput('3')}>3</button>
        <button onClick={() => handleOperatorInput('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleNumberInput('0')}>0</button>
        <button onClick={() => handleNumberInput('.')}>.</button>
        <button onClick={handlePercentageInput}>%</button>
        <button onClick={() => handleOperatorInput('+')}>+</button>
      </div>
      <div>
        <button onClick={handleClearInput}>C</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Calculate);