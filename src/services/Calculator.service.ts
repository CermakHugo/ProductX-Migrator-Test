

export class CalculatorService {
  calculate(number1: string, number2: string, operation: string) {
    if (typeof number1 !== 'string' || typeof number2 !== 'string' || typeof operation !== 'string') {
      throw new Error('Invalid input type');
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Invalid input value');
    }

    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error('Division by zero');
        }
        return num1 / num2;
      default:
        throw new Error('Invalid operation');
    }
  }
}