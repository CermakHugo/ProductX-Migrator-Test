

import React from 'react';
import { connect } from 'react-redux';
import { lockNumberValue } from '../actions';

const LockNumberValueComponent = ({ lockNumberValue, lockedNumber }) => {
  const handleInputChange = (event) => {
    const number = parseFloat(event.target.value);
    if (isNaN(number)) {
      return;
    }
    return number;
  };

  const handleLockClick = (number) => {
    lockNumberValue(number);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={() => handleLockClick(handleInputChange())}>Lock Number</button>
      {lockedNumber && <p>Locked Number: {lockedNumber}</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { lockedNumber: state.lockedNumber };
};

export default connect(mapStateToProps, { lockNumberValue })(LockNumberValueComponent);