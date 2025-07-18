

export class UtilityService {
  ToTrimmedString(value: number, decimalFormat: string): string {
    if (value === null || value === undefined) {
      throw new Error('Input value cannot be null or undefined');
    }
    if (!decimalFormat || typeof decimalFormat !== 'string') {
      throw new Error('Input decimalFormat must be a non-empty string');
    }
    try {
      let result = value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 20 });
      if (decimalFormat) {
        result = value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 20, ...this.getDecimalFormatOptions(decimalFormat) });
      }
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

  private getDecimalFormatOptions(decimalFormat: string): Intl.NumberFormatOptions {
    const options: Intl.NumberFormatOptions = {};
    if (decimalFormat.includes(',')) {
      options.grouping = ',';
    }
    if (decimalFormat.includes('.')) {
      options.decimal = '.';
    }
    return options;
  }
}