

import React, { useState } from 'react';
import CalculatorUI from './CalculatorUI';
import CalculatorService from './CalculatorService';
import './CalculatorMainPage.component.css';

interface CalculatorMainPageProps {}

const CalculatorMainPage: React.FC<CalculatorMainPageProps> = () => {
  const [currentCalculation, setCurrentCalculation] = useState('');
  const [result, setResult] = useState('0');

  const handleNumericalButtonClick = (value: string) => {
    setCurrentCalculation(currentCalculation + value);
  };

  const handleOperatorButtonClick = (operator: string) => {
    setCurrentCalculation(currentCalculation + operator);
  };

  const handleEqualsButtonClick = () => {
    const calculatorService = new CalculatorService();
    const result = calculatorService.calculate(currentCalculation);
    setResult(result);
  };

  return (
    <div className="calculator-interface">
      <CalculatorUI />
      <div className="input-field" id="CurrentCalculation">{currentCalculation}</div>
      <div className="output-field" id="resultText">{result}</div>
      <div className="numerical-button" id="7" onClick={() => handleNumericalButtonClick('7')}>7</div>
      <div className="numerical-button" id="8" onClick={() => handleNumericalButtonClick('8')}>8</div>
      <div className="numerical-button" id="9" onClick={() => handleNumericalButtonClick('9')}>9</div>
      <div className="operator-button" id="÷" onClick={() => handleOperatorButtonClick('÷')}>÷</div>
      <div className="numerical-button" id="4" onClick={() => handleNumericalButtonClick('4')}>4</div>
      <div className="numerical-button" id="5" onClick={() => handleNumericalButtonClick('5')}>5</div>
      <div className="numerical-button" id="6" onClick={() => handleNumericalButtonClick('6')}>6</div>
      <div className="operator-button" id="×" onClick={() => handleOperatorButtonClick('×')}>×</div>
      <div className="numerical-button" id="1" onClick={() => handleNumericalButtonClick('1')}>1</div>
      <div className="numerical-button" id="2" onClick={() => handleNumericalButtonClick('2')}>2</div>
      <div className="numerical-button" id="3" onClick={() => handleNumericalButtonClick('3')}>3</div>
      <div className="operator-button" id="-" onClick={() => handleOperatorButtonClick('-')}>-</div>
      <div className="numerical-button" id="00" onClick={() => handleNumericalButtonClick('00')}>00</div>
      <div className="numerical-button" id="0" onClick={() => handleNumericalButtonClick('0')}>0</div>
      <div className="numerical-button" id="." onClick={() => handleNumericalButtonClick('.')}>.</div>
      <div className="operator-button" id="+" onClick={() => handleOperatorButtonClick('+')}>+</div>
      <div className="equals-button" id="=" onClick={handleEqualsButtonClick}>=</div>
    </div>
  );
};

export default CalculatorMainPage;