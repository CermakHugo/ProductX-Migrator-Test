

import React from 'react';
import Calculator from '../components/Calculator/Calculator';
import UtilityService from '../services/UtilityService';

const CalculatorRoute = () => {
  const utilityService = new UtilityService();

  const toTrimmedString = (value, decimalFormat) => {
    return utilityService.toTrimmedString(value, decimalFormat);
  };

  const calculate = (value1, value2, mathOperator) => {
    const calculator = new Calculator();
    return calculator.calculate(value1, value2, mathOperator);
  };

  return (
    <div>
      <Calculator
        toTrimmedString={(value, decimalFormat) =>
          toTrimmedString(value, decimalFormat)
        }
        calculate={(value1, value2, mathOperator) =>
          calculate(value1, value2, mathOperator)
        }
      />
    </div>
  );
};

export default CalculatorRoute;