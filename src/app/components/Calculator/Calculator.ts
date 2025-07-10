

class Calculator {
  static calculate(value1: number, value2: number, mathOperator: string): number {
    let result: number;
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Invalid input: Both value1 and value2 must be numbers');
    }
    if (typeof mathOperator !== 'string') {
      throw new Error('Invalid input: mathOperator must be a string');
    }
    switch (mathOperator) {
      case '+':
        result = value1 + value2;
        break;
      case '-':
        result = value1 - value2;
        break;
      case '*':
        result = value1 * value2;
        break;
      case '/':
        if (value2 === 0) {
          throw new Error('Cannot divide by zero');
        }
        result = value1 / value2;
        break;
      default:
        throw new Error('Invalid math operator');
    }
    return result;
  }
}