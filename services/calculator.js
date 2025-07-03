


import _ from 'lodash';

export default class CalculatorService {
  calculatePercentage(entryValue, totalValue) {
    if (typeof entryValue !== 'number' || typeof totalValue !== 'number') {
      throw new Error('Entry value and total value must be numbers');
    }
    const percentage = _.multiply(_.divide(entryValue, totalValue), 100);
    return percentage;
  }
}