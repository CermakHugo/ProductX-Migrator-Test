

import React from 'react';

const CalculatorDisplay = ({ calculation, result }) => {
  return (
    <div className="calculator-display">
      <p className="calculation">{calculation}</p>
      <p className="result">{result}</p>
    </div>
  );
};

export default CalculatorDisplay;