

import React, { useState } from 'react';
import axios from 'axios';

const NavigationPage = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!num1 || !num2 || !operator) {
      setError('Please enter all fields');
      return;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setError('Please enter valid numbers');
      return;
    }
    axios.post('/api/navigation', {
      num1,
      num2,
      operator,
    })
      .then((response) => {
        setResult(response.data.result);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setOperator('');
    setResult('');
    setError(null);
  };

  return (
    <div>
      <h1>Navigation Page</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Number 1:
          <input type="number" value={num1} onChange={(event) => setNum1(event.target.value)} />
        </label>
        <label>
          Operator:
          <select value={operator} onChange={(event) => setOperator(event.target.value)}>
            <option value="">Select an operator</option>
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
          </select>
        </label>
        <label>
          Number 2:
          <input type="number" value={num2} onChange={(event) => setNum2(event.target.value)} />
        </label>
        <button type="submit">Calculate</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
      <p>Result: {result}</p>
    </div>
  );
};

export default NavigationPage;