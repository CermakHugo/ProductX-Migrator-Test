export class CalculatorService {

  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }

  divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error('Cannot divide by zero');
    }
    return num1 / num2;
  }

  calculate(expression: string): number {
    try {
      const result = Function('"use strict";return (' + expression + ')')();
      return result;
    } catch (error) {
      throw new Error(`Invalid mathematical expression: ${expression}`);
    }
  }
}