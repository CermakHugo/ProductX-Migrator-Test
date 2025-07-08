import React, { useState } from 'react';

interface CalculatorState {
  currentCalculation: string;
  result: number;
}

const Calculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({ currentCalculation: '', result: 0 });

  const handleButtonClick = (buttonValue: string) => {
    // TO DO: implement button click logic
  };

  return (
    <div className="grid-container">
      <div className="header">
        <span id="CurrentCalculation" className="current-calculation">{state.currentCalculation}</span>
        <span id="resultText" className="result-text">{state.result}</span>
        <div className="box-view"></div>
      </div>
      <div className="keypad">
        <button id="Button_7" className="number-button" onClick={() => handleButtonClick('7')}>7</button>
        <button id="Button_8" className="number-button" onClick={() => handleButtonClick('8')}>8</button>
        <button id="Button_9" className="number-button" onClick={() => handleButtonClick('9')}>9</button>
        <button id="Button_Add" className="operator-button" onClick={() => handleButtonClick('+')}>+</button>
        <button id="Button_4" className="number-button" onClick={() => handleButtonClick('4')}>4</button>
        <button id="Button_5" className="number-button" onClick={() => handleButtonClick('5')}>5</button>
        <button id="Button_6" className="number-button" onClick={() => handleButtonClick('6')}>6</button>
        <button id="Button_Subtract" className="operator-button" onClick={() => handleButtonClick('-')}>-</button>
        <button id="Button_1" className="number-button" onClick={() => handleButtonClick('1')}>1</button>
        <button id="Button_2" className="number-button" onClick={() => handleButtonClick('2')}>2</button>
        <button id="Button_3" className="number-button" onClick={() => handleButtonClick('3')}>3</button>
        <button id="Button_Multiply" className="operator-button" onClick={() => handleButtonClick('*')}>x</button>
        <button id="Button_0" className="number-button" onClick={() => handleButtonClick('0')}>0</button>
        <button id="Button_Decimal" className="number-button" onClick={() => handleButtonClick('.')}>.</button>
        <button id="Button_Divide" className="operator-button" onClick={() => handleButtonClick('/')}>/</button>
        <button id="Button_Clear" className="clear-button" onClick={() => handleButtonClick('C')}>C</button>
        <button id="Button_Negative" className="negative-button" onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button id="Button_Percentage" className="percentage-button" onClick={() => handleButtonClick('%')}>%</button>
        <button id="Button_Equal" className="operator-button" onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
