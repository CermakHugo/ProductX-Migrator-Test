

export class UtilityService {
  static ToTrimmedString(value: number, decimalFormat: string): string {
    if (value === null || value === undefined) {
      throw new Error('Input value cannot be null or undefined');
    }
    if (!decimalFormat || typeof decimalFormat !== 'string') {
      throw new Error('Input decimalFormat must be a non-empty string');
    }
    try {
      let result = value.toString(decimalFormat);
      if (result.includes('.')) {
        result = result.replace(/0+$/, '');
        if (result.endsWith('.')) {
          result = result.slice(0, -1);
        }
      }
      return result;
    } catch (error) {
      throw new Error(`Failed to convert value to string: ${error.message}`);
    }
  }

  static FormatDecimal(value: number): string {
    if (value === null || value === undefined) {
      throw new Error('Input value cannot be null or undefined');
    }
    try {
      let result = value.toString();
      if (result.includes('.')) {
        result = result.replace(/0+$/, '');
        if (result.endsWith('.')) {
          result = result.slice(0, -1);
        }
      }
      return result;
    } catch (error) {
      throw new Error(`Failed to format decimal: ${error.message}`);
    }
  }
}