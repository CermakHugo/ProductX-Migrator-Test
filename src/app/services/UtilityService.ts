

class UtilityService {
  toTrimmedString(value, decimalFormat) {
    if (typeof value !== 'number') {
      throw new Error('Input value must be a number');
    }
    if (typeof decimalFormat !== 'string') {
      throw new Error('Decimal format must be a string');
    }
    const stringValue = value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 20 });
    const trimmedValue = stringValue.replace(/0+$/, '').replace(/\.$/, '');
    return trimmedValue;
  }
}

export default UtilityService;