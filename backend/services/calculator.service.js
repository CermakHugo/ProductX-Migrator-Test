

import axios from 'axios';
import CalculatorModel from '../models/calculator.model';

class CalculatorService {
  constructor() {
    this.calculatorModel = new CalculatorModel();
  }

  calculate(inputValues, operator) {
    if (this.isNumber(inputValues[0]) && this.isNumber(inputValues[1]) && this.isOperator(operator)) {
      switch (operator) {
        case '+':
          return inputValues[0] + inputValues[1];
        case '-':
          return inputValues[0] - inputValues[1];
        case '*':
          return inputValues[0] * inputValues[1];
        case '/':
          if (inputValues[1] !== 0) {
            return inputValues[0] / inputValues[1];
          } else {
            throw new Error('Division by zero');
          }
        default:
          throw new Error('Invalid operator');
      }
    } else {
      throw new Error('Invalid input');
    }
  }

  get_input_values() {
    return this.calculatorModel.getInputValues();
  }

  get_operator() {
    return this.calculatorModel.getOperator();
  }

  appendDigit(digit) {
    this.calculatorModel.appendDigit(digit);
    return this.calculatorModel.getCurrentCalculation();
  }

  clearCalculatorEntry() {
    return axios.post('/clear-calculator-entry')
      .then(response => response.data);
  }

  updateDisplay() {
    return axios.get('/display')
      .then(response => response.data);
  }

  clear() {
    this.calculatorModel.clear();
    return this.updateDisplay();
  }

  isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }

  isOperator(operator) {
    return ['+', '-', '*', '/'].includes(operator);
  }
}

export default CalculatorService;