

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calculator = ({ selectedTime }) => {
  const [currentCalculation, setCurrentCalculation] = useState('');
  const [result, setResult] = useState('');
  const [calculationData, setCalculationData] = useState({});

  useEffect(() => {
    axios.get('/api/calculator/getResult')
      .then(response => {
        setCurrentCalculation(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios.get('/api/calculator/getCurrentCalculation')
      .then(response => {
        setCalculationData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleKeypadPress = (key) => {
    axios.post('/keypadPress', { key })
      .then(response => {
        setCurrentCalculation(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleOperatorClick = (operator) => {
    axios.post('/append-operator', { operator })
      .then(response => {
        setCurrentCalculation(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const calculation = { ...calculationData, calculation: currentCalculation, selectedTime };
    axios.post('/api/calculator/getResult', calculation)
      .then(response => {
        setResult(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCalculationResult = (data) => {
    setCurrentCalculation(data);
  };

  useEffect(() => {
    axios.post('/keypadPress', { calculationData })
      .then(response => {
        handleCalculationResult(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [calculationData]);

  return (
    <div>
      <h1>Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={currentCalculation} onChange={(event) => setCurrentCalculation(event.target.value)} />
        <button type="submit">Calculate</button>
      </form>
      <div>
        <button onClick={() => handleKeypadPress('1')}>1</button>
        <button onClick={() => handleKeypadPress('2')}>2</button>
        <button onClick={() => handleKeypadPress('3')}>3</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleKeypadPress('4')}>4</button>
        <button onClick={() => handleKeypadPress('5')}>5</button>
        <button onClick={() => handleKeypadPress('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleKeypadPress('7')}>7</button>
        <button onClick={() => handleKeypadPress('8')}>8</button>
        <button onClick={() => handleKeypadPress('9')}>9</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleKeypadPress('0')}>0</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;