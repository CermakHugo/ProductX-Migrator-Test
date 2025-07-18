

import React, { useState } from 'react';
import MauiAppService from '../services/MauiAppService';

class CalculateController {
  constructor() {
    this.mauiAppService = new MauiAppService();
    this.state = {
      resultText: '',
      currentState: '',
      mathOperator: '',
      firstNumber: '',
      secondNumber: '',
      currentEntry: ''
    };
  }

  Calculate = async () => {
    const result = await this.mauiAppService.Calculate();
    return result;
  };

  OnCalculate = (firstNumber, mathOperator, secondNumber) => {
    this.mauiAppService.OnCalculate(firstNumber, mathOperator, secondNumber);
  };

  handleButtonClick = (buttonText) => {
    switch (buttonText) {
      case 'C':
        this.setState({
          resultText: '',
          currentState: '',
          mathOperator: '',
          firstNumber: '',
          secondNumber: '',
          currentEntry: ''
        });
        break;
      case '=':
        this.OnCalculate(this.state.firstNumber, this.state.mathOperator, this.state.secondNumber);
        break;
      case '%':
        this.OnPercentage();
        break;
      case '-/+':
        this.OnNegative();
        break;
      default:
        this.selectNumber(buttonText);
        break;
    }
  };

  handleOperatorClick = (operator) => {
    this.setState({
      mathOperator: operator,
      currentState: 'operator'
    });
  };

  handleActionClick = (action) => {
    switch (action) {
      case 'sqrt':
        this.OnCalculate(this.state.firstNumber, 'sqrt', '');
        break;
      case '1/x':
        this.OnCalculate(this.state.firstNumber, '1/x', '');
        break;
      default:
        break;
    }
  };

  handleOperatorBehavior = (operator) => {
    switch (operator) {
      case '+':
        this.setState({
          mathOperator: '+',
          currentState: 'operator'
        });
        break;
      case '-':
        this.setState({
          mathOperator: '-',
          currentState: 'operator'
        });
        break;
      case '*':
        this.setState({
          mathOperator: '*',
          currentState: 'operator'
        });
        break;
      case '/':
        this.setState({
          mathOperator: '/',
          currentState: 'operator'
        });
        break;
      default:
        break;
    }
  };

  handleActionButtonBehavior = (action) => {
    switch (action) {
      case 'sqrt':
        this.OnCalculate(this.state.firstNumber, 'sqrt', '');
        break;
      case '1/x':
        this.OnCalculate(this.state.firstNumber, '1/x', '');
        break;
      default:
        break;
    }
  };

  OnPercentage = () => {
    const result = parseFloat(this.state.currentEntry) / 100;
    this.setState({
      resultText: result.toString(),
      currentEntry: result.toString()
    });
  };

  OnNegative = () => {
    const result = parseFloat(this.state.currentEntry) * -1;
    this.setState({
      resultText: result.toString(),
      currentEntry: result.toString()
    });
  };

  selectNumber = (number) => {
    if (this.state.currentState === 'operator') {
      this.setState({
        currentState: 'secondNumber',
        secondNumber: number
      });
    } else {
      this.setState({
        currentState: 'firstNumber',
        firstNumber: number
      });
    }
    this.setState({
      currentEntry: this.state.currentEntry + number
    });
    this.setState({
      resultText: this.state.currentEntry
    });
  };

  GetCurrentCalculation = () => {
    return `${this.state.firstNumber} ${this.state.mathOperator} ${this.state.secondNumber}`;
  };

  UpdateCurrentCalculation = (firstNumber, mathOperator, secondNumber) => {
    this.setState({
      firstNumber,
      mathOperator,
      secondNumber
    });
    return this.GetCurrentCalculation();
  };
}

export default CalculateController;