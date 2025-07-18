

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

  calculate(value1: number, value2: number, mathOperator: string): number {
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
        break;
    }
    return result;
  }

  onCalculate(value1: number, value2: number, mathOperator: string): void {
    const result = this.calculate(value1, value2, mathOperator);
    this.resultText = this.formatResult(result);
    // Update UI elements accordingly
  }

  onPercentage(): void {
    const result = parseFloat(this.resultText) / 100;
    this.resultText = this.formatResult(result);
    // Update resultText UI element
  }

  onNegative(): void {
    const result = -parseFloat(this.resultText);
    this.resultText = this.formatResult(result);
    // Update UI elements accordingly
  }

  lockNumberValue(): void {
    const number = parseFloat(this.currentEntry);
    if (!isNaN(number)) {
      if (this.currentState === 'firstNumber') {
        this.firstNumber = number;
      } else if (this.currentState === 'secondNumber') {
        this.secondNumber = number;
      }
      this.currentEntry = '';
    }
  }

  getCalculationResult(): string {
    return this.resultText;
  }

  appendNumberToResult(number: number): void {
    const currentResult = parseFloat(this.resultText);
    const newResult = currentResult * 10 + number;
    this.resultText = this.formatResult(newResult);
  }

  clearCalculationResult(): void {
    this.resultText = '0';
  }

  calculateResult(): string {
    const result = this.calculate(this.firstNumber, this.secondNumber, this.currentState);
    return this.formatResult(result);
  }

  private formatResult(result: number): string {
    return result.toFixed(2);
  }
}

export default CalculatorService;