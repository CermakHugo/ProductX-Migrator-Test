

import { AppShell } from './AppShell';
import { Grid } from './Grid';

class UtilityService {
  toTrimmedString(target: number, decimalFormat: string): string {
    if (isNaN(target) || !isFinite(target)) {
      throw new Error('Target value must be a valid number');
    }
    if (typeof decimalFormat !== 'string') {
      throw new Error('Decimal format must be a string');
    }
    const str = target.toLocaleString(decimalFormat);
    if (str.includes('.')) {
      const trimmedStr = str.replace(/0+$/, '');
      if (trimmedStr.endsWith('.')) {
        return trimmedStr.replace(/\.$/, '');
      }
      return trimmedStr;
    }
    return str;
  }

  createAppShell(): AppShell {
    return new AppShell();
  }

  createGrid(rows: number, columns: number, width: number, height: number): Grid {
    if (rows <= 0 || columns <= 0 || width <= 0 || height <= 0) {
      throw new Error('Grid dimensions must be positive numbers');
    }
    return new Grid(rows, columns, width, height);
  }
}

export { UtilityService };