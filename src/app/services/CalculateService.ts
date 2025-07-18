

class CalculateService {
  calculatePercentage(currentNumber: number, percentageValue: number): number {
    if (typeof currentNumber !== 'number' || typeof percentageValue !== 'number') {
      throw new Error('Invalid input: Both currentNumber and percentageValue must be numbers.');
    }
    return (currentNumber * percentageValue) / 100;
  }
}

export class CalculateService;