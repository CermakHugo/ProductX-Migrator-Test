

package src.services;

import _ from 'lodash';

export class Calculator {
  getResult(calculationData) {
    const { number1, number2, operator, selectedTime } = calculationData;
    const result = this.performCalculation(number1, number2, operator);
    return this.applyTimeFactor(result, selectedTime);
  }

  performCalculation(number1, number2, operator) {
    switch (operator) {
      case 'add':
        return _.add(number1, number2);
      case 'subtract':
        return _.subtract(number1, number2);
      case 'multiply':
        return _.multiply(number1, number2);
      case 'divide':
        return _.divide(number1, number2);
      case 'modulus':
        return _.mod(number1, number2);
      case 'exponent':
        return _.pow(number1, number2);
      default:
        throw new Error(`Invalid operator: ${operator}`);
    }
  }

  applyTimeFactor(result, selectedTime) {
    switch (selectedTime) {
      case 'hour':
        return result * 60;
      case 'day':
        return result * 24 * 60;
      case 'week':
        return result * 7 * 24 * 60;
      case 'month':
        return result * 30 * 24 * 60;
      case 'year':
        return result * 365 * 24 * 60;
      default:
        return result;
    }
  }
}

export function calculate(selectedTime, number1, number2, operator) {
  const calculator = new Calculator();
  const calculationData = { number1, number2, operator, selectedTime };
  return calculator.getResult(calculationData);
}