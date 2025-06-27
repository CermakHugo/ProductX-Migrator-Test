

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Keypad = () => {
  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState('');

  const handleKeypadPress = async (input) => {
    if (input === 'C') {
      setCalculation('');
      setResult('');
    } else {
      try {
        const response = await fetch('/keypadPress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ input }),
        });
        if (response.ok) {
          const data = await response.json();
          setCalculation(data.calculation);
          setResult(data.result);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const updateCalculation = async () => {
      try {
        const response = await fetch('/keypadPress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ input: '=' }),
        });
        if (response.ok) {
          const data = await response.json();
          setCalculation(data.calculation);
          setResult(data.result);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error(error);
      }
    };
    updateCalculation();
  }, []);

  return (
    <div>
      <input type="text" value={calculation} readOnly />
      <div>
        <button onClick={() => handleKeypadPress('7')}>7</button>
        <button onClick={() => handleKeypadPress('8')}>8</button>
        <button onClick={() => handleKeypadPress('9')}>9</button>
        <button onClick={() => handleKeypadPress('/')}>/</button>
      </div>
      <div>
        <button onClick={() => handleKeypadPress('4')}>4</button>
        <button onClick={() => handleKeypadPress('5')}>5</button>
        <button onClick={() => handleKeypadPress('6')}>6</button>
        <button onClick={() => handleKeypadPress('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleKeypadPress('1')}>1</button>
        <button onClick={() => handleKeypadPress('2')}>2</button>
        <button onClick={() => handleKeypadPress('3')}>3</button>
        <button onClick={() => handleKeypadPress('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleKeypadPress('0')}>0</button>
        <button onClick={() => handleKeypadPress('.')}>.</button>
        <button onClick={() => handleKeypadPress('C')}>C</button>
        <button onClick={() => handleKeypadPress('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleKeypadPress('=')}>=</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
};

ReactDOM.render(<Keypad />, document.getElementById('root'));