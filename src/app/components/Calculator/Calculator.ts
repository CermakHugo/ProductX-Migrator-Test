

import React from 'react';
import './Calculator.css';

interface CalculatorProps {
  // Add props if needed
}

interface CalculatorState {
  currentCalculation: string;
  result: string;
  firstNumber: number;
  secondNumber: number;
  mathOperator: string;
  calculationResult: number;
  selectedNumber: number;
  currentState: number;
  decimalFormat: string;
  currentEntry: string;
}

class Calculator extends React.Component<CalculatorProps, CalculatorState> {
  constructor(props: CalculatorProps) {
    super(props);
    this.state = {
      currentCalculation: '',
      result: '0',
      firstNumber: 0,
      secondNumber: 0,
      mathOperator: '',
      calculationResult: 0,
      selectedNumber: 0,
      currentState: 1,
      decimalFormat: 'N0',
      currentEntry: '',
    };
  }

  handleButtonClick = (buttonValue: string) => {
    switch (buttonValue) {
      case 'C':
        this.onClear();
        break;
      case '+/-':
        this.onNegative();
        break;
      case '%':
        this.onPercentage();
        break;
      case '=':
        this.onCalculate();
        break;
      default:
        this.onSelectNumber(buttonValue);
        break;
    }
  };

  onSelectNumber = (number: string) => {
    const { currentEntry, currentState } = this.state;
    let resultText = currentEntry;
    if (currentState === 1 && number === '0') {
      resultText = '';
    } else if (currentEntry.length <= 1 && number !== '0') {
      resultText = '';
    } else if (currentState < 0) {
      resultText = '';
    }
    resultText += number;
    this.setState({ currentEntry: resultText, result: resultText });
    if (number === '.' && this.state.decimalFormat !== 'N2') {
      this.setState({ decimalFormat: 'N2' });
    }
  };

  onClear = () => {
    this.setState({
      currentCalculation: '',
      result: '0',
      firstNumber: 0,
      secondNumber: 0,
      mathOperator: '',
      calculationResult: 0,
      selectedNumber: 0,
      currentState: 1,
      decimalFormat: 'N0',
      currentEntry: '',
    });
  };

  onNegative = () => {
    if (this.state.currentState === 1) {
      this.setState({ secondNumber: -1, mathOperator: '×', currentState: 2 });
      this.onCalculate();
    }
  };

  onPercentage = () => {
    if (this.state.currentState === 1) {
      this.LockNumberValue(this.state.result);
      this.setState({ decimalFormat: 'N2', secondNumber: 0.01, mathOperator: '×', currentState: 2 });
      this.onCalculate();
    }
  };

  onCalculate = () => {
    if (this.state.currentState === 2) {
      if (this.state.secondNumber === 0) {
        this.LockNumberValue(this.state.result);
      }
      const result = this.Calculate(this.state.firstNumber, this.state.secondNumber, this.state.mathOperator);
      this.setState({
        calculationResult: result,
        currentCalculation: `${this.state.firstNumber} ${this.state.mathOperator} ${this.state.secondNumber}`,
        result: this.ToTrimmedString(result.toString(), this.state.decimalFormat),
        firstNumber: result,
        secondNumber: 0,
        currentState: -1,
        currentEntry: '',
      });
    }
  };

  onSelectOperator = (operator: string) => {
    this.LockNumberValue(this.state.result);
    this.setState({ mathOperator: operator, currentState: -2 });
  };

  LockNumberValue = (value: string) => {
    const number = parseFloat(value);
    if (this.state.currentState === 1) {
      this.setState({ firstNumber: number });
    } else {
      this.setState({ secondNumber: number });
    }
  };

  ToTrimmedString = (value: string, format: string) => {
    // Implement the ToTrimmedString method of the UtilityService class
  };

  Calculate = (firstNumber: number, secondNumber: number, mathOperator: string) => {
    // Implement the Calculate method of the CalculatorService class
  };

  getCalculationResult = () => {
    // Implement the getCalculationResult method of the CalculatorService class
  };

  appendNumberToResult = (number: string) => {
    // Implement the appendNumberToResult method of the CalculatorService class
  };

  clearCalculationResult = () => {
    // Implement the clearCalculationResult method of the CalculatorService class
  };

  calculateResult = () => {
    // Implement the calculateResult method of the CalculatorService class
  };

  selectNumber = (number: string) => {
    // Implement the selectNumber method
  };

  selectOperator = (operator: string) => {
    // Implement the selectOperator method
  };

  clear = () => {
    // Implement the clear method
  };

  negative = () => {
    // Implement the negative method
  };

  percentage = () => {
    // Implement the percentage method
  };

  updateSecondNumberAndMathOperator = () => {
    // Implement the updateSecondNumberAndMathOperator method
  };

  calculatePercentage = () => {
    // Implement the calculatePercentage method
  };

  render() {
    return (
      <div className="calculator">
        <div className="header">
          <label className="current-calculation" id="CurrentCalculation">{this.state.currentCalculation}</label>
          <label className="result-text" id="resultText">{this.state.result}</label>
          <div className="separator"></div>
        </div>
        <div className="button-grid">
          <button className="button" id="C" onClick={() => this.handleButtonClick('C')}>C</button>
          <button className="button" id="plus-minus" onClick={() => this.handleButtonClick('+/-')}>+/-</button>
          <button className="button" id="percent" onClick={() => this.handleButtonClick('%')}>%</button>
          <button className="button" id="divide" onClick={() => this.handleButtonClick('/')}>/</button>
          <button className="button" id="multiply" onClick={() => this.handleButtonClick('*')}>*</button>
          <button className="button" id="subtract" onClick={() => this.handleButtonClick('-')}>-</button>
          <button className="button" id="add" onClick={() => this.handleButtonClick('+')}>+</button>
          <button className="button" id="equals" onClick={() => this.handleButtonClick('=')}>=</button>
          <button className="button" id="zero" onClick={() => this.handleButtonClick('0')}>0</button>
          <button className="button" id="one" onClick={() => this.handleButtonClick('1')}>1</button>
          <button className="button" id="two" onClick={() => this.handleButtonClick('2')}>2</button>
          <button className="button" id="three" onClick={() => this.handleButtonClick('3')}>3</button>
          <button className="button" id="four" onClick={() => this.handleButtonClick('4')}>4</button>
          <button className="button" id="five" onClick={() => this.handleButtonClick('5')}>5</button>
          <button className="button" id="six" onClick={() => this.handleButtonClick('6')}>6</button>
          <button className="button" id="seven" onClick={() => this.handleButtonClick('7')}>7</button>
          <button className="button" id="eight" onClick={() => this.handleButtonClick('8')}>8</button>
          <button className="button" id="nine" onClick={() => this.handleButtonClick('9')}>9</button>
        </div>
      </div>
    );
  }
}

export default Calculator;