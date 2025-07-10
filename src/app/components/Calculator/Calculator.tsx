

import React, { useState } from 'react';
import CalculatorController from '../../controllers/CalculatorController';
import UtilityService from '../../services/UtilityService';

const Calculator = () => {
  const [trimmedString, setTrimmedString] = useState('');
  const utilityService = new UtilityService();

  const handleTrimmedString = (doubleValue, decimalFormat) => {
    if (doubleValue !== undefined && decimalFormat !== undefined) {
      const trimmed = utilityService.toTrimmedString(doubleValue, decimalFormat);
      setTrimmedString(trimmed);
    }
  };

  return (
    <div>
      {/* existing Calculator component template content */}
      <p>Trimmed String: {trimmedString}</p>
      <button onClick={() => handleTrimmedString(123.456, '0.00')}>Trim String</button>
    </div>
  );
};

export default Calculator;