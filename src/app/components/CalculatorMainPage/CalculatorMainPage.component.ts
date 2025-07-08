

import React, { useState } from 'react';

interface CalculatorState {
  currentCalculation: string;
  result: string;
}

const CalculatorMainPage: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({ currentCalculation: '', result: '0' });
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleNumber1Change = (event: any) => {
    setNumber1(event.target.value);
  }

  const handleNumber2Change = (event: any) => {
    setNumber2(event.target.value);
  }

  const handleOperationChange = (event: any) => {
    setOperation(event.target.value);
  }

  const handleCalculateClick = () => {
    const calculation = Calculator.calculate(number1, number2, operation);
    setResult(calculation.toString());
  }

  const handleButtonClick = (buttonValue: string) => {
    // TO DO: implement button click logic
  };

  const gridRows = 5;
  const gridColumns = 4;
  const gridWidth = 700;
  const gridHeight = 500;
  const windowWidth = 800;
  const windowHeight = 600;
  const windowBackgroundColor = "#FFFFFF";
  const gridBackgroundColor = "#000000";
  const rowHeight = 50;
  const columnWidth = 150;
  const fontSize = 24;
  const fontColor = "#000000";

  return (
    <div className="calculator-interface" style={{ width: windowWidth, height: windowHeight, backgroundColor: windowBackgroundColor }}>
      <div className="grid-container" style={{ width: gridWidth, height: gridHeight, backgroundColor: gridBackgroundColor }}>
        <input id="CurrentCalculation" className="input-field" type="text" value={state.currentCalculation} style={{ fontSize: fontSize, color: fontColor }} />
        <div id="resultText" className="output-field" style={{ fontSize: fontSize, color: fontColor }}>{state.result}</div>
        <button id="7" className="numerical-button" onClick={() => handleButtonClick('7')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>7</button>
        <button id="8" className="numerical-button" onClick={() => handleButtonClick('8')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>8</button>
        <button id="9" className="numerical-button" onClick={() => handleButtonClick('9')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>9</button>
        <button id="÷" className="operator-button" onClick={() => handleButtonClick('÷')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>÷</button>
        <button id="4" className="numerical-button" onClick={() => handleButtonClick('4')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>4</button>
        <button id="5" className="numerical-button" onClick={() => handleButtonClick('5')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>5</button>
        <button id="6" className="numerical-button" onClick={() => handleButtonClick('6')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>6</button>
        <button id="×" className="operator-button" onClick={() => handleButtonClick('×')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>×</button>
        <button id="1" className="numerical-button" onClick={() => handleButtonClick('1')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>1</button>
        <button id="2" className="numerical-button" onClick={() => handleButtonClick('2')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>2</button>
        <button id="3" className="numerical-button" onClick={() => handleButtonClick('3')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>3</button>
        <button id="-" className="operator-button" onClick={() => handleButtonClick('-')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>-</button>
        <button id="00" className="numerical-button" onClick={() => handleButtonClick('00')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>00</button>
        <button id="0" className="numerical-button" onClick={() => handleButtonClick('0')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>0</button>
        <button id="." className="numerical-button" onClick={() => handleButtonClick('.')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>.</button>
        <button id="+" className="operator-button" onClick={() => handleButtonClick('+')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>+</button>
        <button id="=" className="equals-button" onClick={() => handleButtonClick('=')} style={{ width: columnWidth, height: rowHeight, fontSize: fontSize, color: fontColor }}>=</button>
        <input id="number1" type="text" value={number1} onChange={handleNumber1Change} />
        <input id="number2" type="text" value={number2} onChange={handleNumber2Change} />
        <select id="operation" value={operation} onChange={handleOperationChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <button id="calculate" onClick={handleCalculateClick}>Calculate</button>
        <div id="result">{result}</div>
      </div>
    </div>
  );
};

export default CalculatorMainPage;