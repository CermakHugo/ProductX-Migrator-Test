

import Calculator from '../components/Calculator/Calculator';

class CalculatorController {
  async calculate(value1: number, value2: number, mathOperator: string) {
    const result = await Calculator.calculate(value1, value2, mathOperator);
    return result;
  }
}

export default CalculatorController;