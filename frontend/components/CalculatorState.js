

import React from 'react';
import { useSelector } from 'react-redux';

const CalculatorState = () => {
  const calculatorState = useSelector((state) => state.calculator);

  return (
    <div>
      <h2>Calculator State</h2>
      <p>Expression: {calculatorState.expression}</p>
      <p>Result: {calculatorState.result}</p>
      <p>Error: {calculatorState.error}</p>
    </div>
  );
};

export default CalculatorState;