

import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {
  calculations: string[] = [];
  results: string[] = [];
  operations = {
    '÷': (a: number, b: number) => a / b,
    '×': (a: number, b: number) => a * b,
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b
  };

  ToTrimmedString(target: number, decimalFormat: string): string {
    let result = target.toString(decimalFormat);
    if (result.includes('.')) {
      result = result.replace(/0+$/, '');
      if (result.endsWith('.')) {
        result = result.replace(/\.$/, '');
      }
    }
    return result;
  }

  Calculate(value1: number, value2: number, mathOperator: string): number {
    if (!['÷', '×', '+', '-'].includes(mathOperator)) {
      throw new Error('Invalid math operator');
    }
    let result = 0;
    switch (mathOperator) {
      case '÷':
        if (value2 === 0) {
          throw new Error('Division by zero');
        }
        result = value1 / value2;
        break;
      case '×':
        result = value1 * value2;
        break;
      case '+':
        result = value1 + value2;
        break;
      case '-':
        result = value1 - value2;
        break;
    }
    return result;
  }

  calculate(operation: string, a: number, b: number): number {
    return this.operations[operation](a, b);
  }

  getCalculations(): string[] {
    return this.calculations;
  }

  getResults(): string[] {
    return this.results;
  }
}