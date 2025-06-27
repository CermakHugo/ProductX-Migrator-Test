

import React from 'react';
import { connect } from 'react-redux';
import { calculatePercentage, updateValues } from '../actions';

const PercentageCalculator = ({ values, calculatePercentage, updateValues }) => {
  const handleButtonClick = () => {
    calculatePercentage(values);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    updateValues(value);
  };

  return (
    <div>
      <input type="text" value={values.inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Calculate Percentage</button>
      <p>Result: {values.result}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { values: state.values };
};

export default connect(mapStateToProps, { calculatePercentage, updateValues })(PercentageCalculator);