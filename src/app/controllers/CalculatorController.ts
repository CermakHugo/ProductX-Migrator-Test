

import { Calculator } from '../components/Calculator';

class CalculatorController {
  async calculate(value1: number, value2: number, mathOperator: string) {
    const calculator = new Calculator();
    const result = await calculator.calculate(value1, value2, mathOperator);
    return result;
  }
}

export default CalculatorController;