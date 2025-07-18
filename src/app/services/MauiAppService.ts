

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MauiAppService {

  result: number = 0;
  currentState: string = '';
  mathOperator: string = '';
  firstNumber: number = 0;
  secondNumber: number = 0;
  resultText: string = '';

  constructor() { }

  createMauiApp() {
    // Create and configure a MauiApp instance
    // For demonstration purposes, assume MauiApp is a class
    const mauiApp = new MauiApp();
    // Configure mauiApp instance
    return mauiApp;
  }

  calculate(value1: number, value2: number, mathOperator: string) {
    this.result = 0;
    switch (mathOperator) {
      case "÷":
        this.result = value1 / value2;
        break;
      case "×":
        this.result = value1 * value2;
        break;
      case "+":
        this.result = value1 + value2;
        break;
      case "-":
        this.result = value1 - value2;
        break;
      default:
        break;
    }
    return this.result;
  }

  handleButtonClick(buttonText: string) {
    if (buttonText === 'C') {
      this.resultText = '';
      this.currentState = '';
      this.mathOperator = '';
      this.firstNumber = 0;
      this.secondNumber = 0;
    } else if (buttonText === '=') {
      this.secondNumber = parseFloat(this.resultText);
      this.result = this.calculate(this.firstNumber, this.secondNumber, this.mathOperator);
      this.resultText = this.result.toString();
      this.currentState = '';
      this.mathOperator = '';
      this.firstNumber = 0;
      this.secondNumber = 0;
    } else {
      this.resultText += buttonText;
    }
  }

  handleOperatorButtonClick(buttonText: string) {
    if (this.currentState === '') {
      this.firstNumber = parseFloat(this.resultText);
      this.mathOperator = buttonText;
      this.currentState = 'operator';
      this.resultText = '';
    }
  }

  handleActionButtonClick(buttonText: string) {
    if (buttonText === '%') {
      this.onPercentage();
    } else if (buttonText === '+/-') {
      this.onNegative();
    }
  }

  onPercentage() {
    if (this.currentState === '') {
      this.result = this.firstNumber / 100;
      this.resultText = this.result.toString();
    } else {
      this.result = this.secondNumber / 100;
      this.resultText = this.result.toString();
    }
  }

  onNegative() {
    if (this.currentState === '') {
      this.firstNumber = -this.firstNumber;
      this.resultText = this.firstNumber.toString();
    } else {
      this.secondNumber = -this.secondNumber;
      this.resultText = this.secondNumber.toString();
    }
  }

  onCalculate() {
    this.secondNumber = parseFloat(this.resultText);
    this.result = this.calculate(this.firstNumber, this.secondNumber, this.mathOperator);
    this.resultText = this.result.toString();
    this.currentState = '';
    this.mathOperator = '';
    this.firstNumber = 0;
    this.secondNumber = 0;
  }

}