

import React, { useState } from 'react';

interface CalculatorProps {
  utilityService: UtilityService;
}

const Calculator: React.FC<CalculatorProps> = ({ utilityService }) => {
  const [currentCalculation, setCurrentCalculation] = useState('');
  const [result, setResult] = useState(0);

  const handleButtonClick = (buttonValue: string) => {
    if (buttonValue === 'C') {
      setCurrentCalculation('');
      setResult(0);
    } else if (buttonValue === '=') {
      const trimmedCalculation = utilityService.toTrimmedString(currentCalculation);
      const [value1, mathOperator, value2] = trimmedCalculation.match(/(\d+)\s*([+\-x/])\s*(\d+)/);
      const result = calculate(Number(value1), Number(value2), mathOperator);
      setResult(result);
      setCurrentCalculation(`${value1} ${mathOperator} ${value2} = ${result}`);
    } else {
      setCurrentCalculation(currentCalculation + buttonValue);
    }
  };

  const calculate = (value1: number, value2: number, mathOperator: string): number => {
    switch (mathOperator) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case 'x':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return 0;
    }
  };

  return (
    <div className="grid-container">
      <div className="header">
        <span id="CurrentCalculation" className="current-calculation">{currentCalculation}</span>
      </div>
      <div className="display">
        <span id="resultText" className="result-text">{result}</span>
      </div>
      <div className="keypad">
        <button id="C" className="c-button" onClick={() => handleButtonClick('C')}>C</button>
        <button id="+/-" className="plus-minus-button" onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button id="%" className="percent-button" onClick={() => handleButtonClick('%')}>%</button>
        <button id="Number" className="number-button" onClick={() => handleButtonClick('7')}>7</button>
        <button id="Number" className="number-button" onClick={() => handleButtonClick('8')}>8</button>
        <button id="Number" className="number-button" onClick={() => handleButtonClick('9')}>9</button>
        <button id="Operator" className="operator-button" onClick={() => handleButtonClick('/')}>/</button>
        <button id="Number" className="number-button" onClick={() => handleButtonClick('4')}>4</button>
        <button id="Number" className="number-button" onClick={() => handleButtonClick('5')}>5</button>
        <button id="Number" className="number-button" onClick={() => handleButtonClick('6')}>6</button>
        <button id="Operator" className="operator-button" onClick={() => handleButtonClick('x')}>x</button>
        <button id="Number" className="number-button" onClick={() => handleButtonClick('1')}>1</button>
        <button id="Number" className="number-button" onClick={() => handleButtonClick('2')}>2</button>
        <button id="Number" className="number-button" onClick={() => handleButtonClick('3')}>3</button>
        <button id="Operator" className="operator-button" onClick={() => handleButtonClick('-')}>-</button>
        <button id="Number" className="number-button" onClick={() => handleButtonClick('0')}>0</button>
        <button id="Number" className="number-button" onClick={() => handleButtonClick('00')}>00</button>
        <button id="Number" className="number-button" onClick={() => handleButtonClick('.')}>.</button>
        <button id="Operator" className="operator-button" onClick={() => handleButtonClick('+')}>+</button>
        <button id="Operator" className="operator-button" onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;