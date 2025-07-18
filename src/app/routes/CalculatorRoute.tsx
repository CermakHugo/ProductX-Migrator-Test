

import React from 'react';
import CalculatorView from '../components/Calculator/Calculator.tsx';
import Calculator from '../components/Calculator/Calculator.ts';
import UtilityService from '../services/UtilityService';

const CalculatorRoute = () => {
  const utilityService = new UtilityService();

  const toTrimmedString = (value, decimalFormat) => {
    return utilityService.toTrimmedString(value, decimalFormat);
  };

  const calculate = (value1, value2, mathOperator) => {
    return Calculator.calculate(value1, value2, mathOperator);
  };

  return (
    <div>
      <CalculatorView
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