

export class ToTrimmedStringService {
  ToTrimmedString(target: number, decimalFormat: string): string {
    if (typeof target !== 'number' || isNaN(target)) {
      throw new Error('Invalid target value');
    }
    if (typeof decimalFormat !== 'string') {
      throw new Error('Invalid decimal format');
    }
    try {
      let result = target.toString(decimalFormat);
      if (result.includes('.')) {
        result = result.replace(/0+$/, '');
        if (result.endsWith('.')) {
          result = result.slice(0, -1);
        }
      }
      return result;
    } catch (error) {
      console.error('Error occurred during ToTrimmedString execution:', error);
      throw error;
    }
  }
}