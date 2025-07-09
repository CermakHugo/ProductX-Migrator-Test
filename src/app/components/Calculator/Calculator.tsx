

import React, { Component } from 'react';
import CalculatorService from '../../services/CalculatorService';

class Calculator extends Component {
  calculatorService = new CalculatorService();
  selectedOperation = '';
  firstOperand = 0;
  secondOperand = 0;
  result = 0;

  constructor(props) {
    super(props);
    this.calculatorService = new CalculatorService();
  }

  calculate = () => {
    try {
      this.result = this.calculatorService.calculate(this.selectedOperation, this.firstOperand, this.secondOperand);
    } catch (error) {
      console.error(error);
    }
  };

  selectOperation = (operation) => {
    this.selectedOperation = operation;
  };

  enterOperand = (operand) => {
    if (!this.selectedOperation) {
      this.firstOperand = operand;
    } else {
      this.secondOperand = operand;
    }
  };

  clear = () => {
    this.selectedOperation = '';
    this.firstOperand = 0;
    this.secondOperand = 0;
    this.result = 0;
  };

  toTrimmedString = () => {
    this.calculatorService.ToTrimmedString();
  };

  render() {
    return (
      <div>
        <button onClick={this.toTrimmedString}>To Trimmed String</button>
        <button onClick={this.calculate}>Calculate</button>
        <button onClick={this.clear}>Clear</button>
        <input type="number" value={this.firstOperand} onChange={(e) => this.enterOperand(e.target.valueAsNumber)} />
        <select value={this.selectedOperation} onChange={(e) => this.selectOperation(e.target.value)}>
          <option value="">Select Operation</option>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
        <input type="number" value={this.secondOperand} onChange={(e) => this.enterOperand(e.target.valueAsNumber)} />
        <p>Result: {this.result}</p>
      </div>
    );
  }
}

export default Calculator;