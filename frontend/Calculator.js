

import React, { useState, useEffect } from 'react';
import api from './api';

const Calculator = () => {
  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);

  const handleOperatorClick = async (operator) => {
    try {
      const response = await api.post('/calculate', { calculation, operator });
      setCalculation(response.data.calculation);
      setResult(response.data.result);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDigitClick = async (digit) => {
    try {
      const response = await api.post('/append-digit', { calculation, digit });
      setCalculation(response.data.calculation);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClearClick = async () => {
    try {
      const response = await api.post('/clear');
      setCalculation('');
      setResult('');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleMenuSelection = async (selection) => {
    try {
      const response = await api.post('/menu-selection', { selection });
      setCalculation(response.data.calculation);
      setResult(response.data.result);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await api.get('/initial-data');
        setCalculation(response.data.calculation);
        setResult(response.data.result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchInitialData();
  }, []);

  return (
    <div>
      <input type="text" value={calculation} readOnly />
      <input type="text" value={result} readOnly />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <button onClick={() => handleDigitClick('0')}>0</button>
        <button onClick={() => handleDigitClick('1')}>1</button>
        <button onClick={() => handleDigitClick('2')}>2</button>
        <button onClick={() => handleDigitClick('3')}>3</button>
        <button onClick={() => handleDigitClick('4')}>4</button>
        <button onClick={() => handleDigitClick('5')}>5</button>
        <button onClick={() => handleDigitClick('6')}>6</button>
        <button onClick={() => handleDigitClick('7')}>7</button>
        <button onClick={() => handleDigitClick('8')}>8</button>
        <button onClick={() => handleDigitClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={handleClearClick}>Clear</button>
        <select onChange={(e) => handleMenuSelection(e.target.value)}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default Calculator;