

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  calculate(number1: string, number2: string, operation: string): number {
    return eval(`${number1} ${operation} ${number2}`);
  }

}