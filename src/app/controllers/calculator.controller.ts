

import { Controller } from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Controller()
export class CalculatorController {
  constructor(private calculatorService: CalculatorService) { }

  calculate(expression: string): number {
    return this.calculatorService.calculate(expression);
  }

  add(num1: number, num2: number): number {
    return this.calculatorService.add(num1, num2);
  }

  subtract(num1: number, num2: number): number {
    return this.calculatorService.subtract(num1, num2);
  }

  multiply(num1: number, num2: number): number {
    return this.calculatorService.multiply(num1, num2);
  }

  divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error('Cannot divide by zero');
    }
    return this.calculatorService.divide(num1, num2);
  }
}