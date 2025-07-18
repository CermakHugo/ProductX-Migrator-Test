

class CalculatorService {
  private firstNumber: number;
  private secondNumber: number;
  private currentEntry: string;
  private currentState: string;
  private decimalFormat: string;
  private resultText: string;

  constructor() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.currentEntry = '';
    this.currentState = '';
    this.decimalFormat = '0.00';
    this.resultText = '0';
  }

  static calculate(value1: number, value2: number, mathOperator: string): number {
    let result = 0;
    switch (mathOperator) {
      case 'Division':
        result = value1 / value2;
        break;
      case 'Multiplication':
        result = value1 * value2;
        break;
      case 'Addition':
        result = value1 + value2;
        break;
      case 'Subtraction':
        result = value1 - value2;
        break;
      default:
        throw new Error('Invalid math operator');
    }
    return result;
  }

  initializeCalculator(): void {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.currentEntry = '';
    this.currentState = '';
    this.decimalFormat = '0.00';
    this.resultText = '0';
  }

  performCalculation(value1: number, value2: number, mathOperator: string): number {
    return CalculatorService.calculate(value1, value2, mathOperator);
  }

  resetCalculator(): void {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.currentEntry = '';
    this.currentState = '';
    this.resultText = '0';
  }

  getResultText(): string {
    return this.resultText;
  }

  updateResultText(result: number): void {
    this.resultText = result.toFixed(2);
  }

  clearResultText(): void {
    this.resultText = '0';
  }

  appendNumberToResultText(number: number): void {
    if (this.resultText === '0') {
      this.resultText = number.toString();
    } else {
      this.resultText += number.toString();
    }
  }

  onPercentage(): void {
    const result = parseFloat(this.resultText) / 100;
    this.resultText = result.toFixed(2);
  }

  onCalculate(value1: number, value2: number, mathOperator: string): void {
    const result = this.performCalculation(value1, value2, mathOperator);
    this.updateResultText(result);
  }
}

export default CalculatorService;