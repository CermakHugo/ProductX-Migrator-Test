import React, { useState } from 'react';
import './CalculatorApplicationWindow.css';

interface CalculatorApplicationWindowState {
  currentCalculation: string;
  result: string;
}

const CalculatorApplicationWindow: React.FC = () => {
  const [state, setState] = useState<CalculatorApplicationWindowState>({ currentCalculation: '', result: '0' });

  const handleButtonClick = (buttonValue: string) => {
    // TO DO: implement button click logic
  };

  return (
    <div className="grid-container">
      <Header className="header" id="CurrentCalculation">
        {state.currentCalculation}
      </Header>
      <Result className="result" id="resultText">
        {state.result}
      </Result>
      <ButtonGrid className="button-grid">
        <button id="C" onClick={() => handleButtonClick('C')}>C</button>
        <button id="+/-" onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button id="0" onClick={() => handleButtonClick('0')}>0</button>
        <button id="1" onClick={() => handleButtonClick('1')}>1</button>
        <button id="2" onClick={() => handleButtonClick('2')}>2</button>
        <button id="3" onClick={() => handleButtonClick('3')}>3</button>
        <button id="4" onClick={() => handleButtonClick('4')}>4</button>
        <button id="5" onClick={() => handleButtonClick('5')}>5</button>
        <button id="6" onClick={() => handleButtonClick('6')}>6</button>
        <button id="7" onClick={() => handleButtonClick('7')}>7</button>
        <button id="8" onClick={() => handleButtonClick('8')}>8</button>
        <button id="9" onClick={() => handleButtonClick('9')}>9</button>
        <button id="+" onClick={() => handleButtonClick('+')}>+</button>
        <button id="-" onClick={() => handleButtonClick('-')}>-</button>
        <button id="*" onClick={() => handleButtonClick('*')}>*</button>
        <button id="/" onClick={() => handleButtonClick('/')}>/</button>
        <button id="=" onClick={() => handleButtonClick('=')}>=</button>
      </ButtonGrid>
    </div>
  );
};

export default CalculatorApplicationWindow;