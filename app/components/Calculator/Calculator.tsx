

import React from 'react';
import { CalculatorService } from '../../services/CalculatorService';

const Calculator = () => {
  const calculatorService = new CalculatorService();
  calculatorService.calculate();
  return <div>Calculator</div>;
};

export default Calculator;