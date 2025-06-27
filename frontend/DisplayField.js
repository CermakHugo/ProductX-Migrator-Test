

import React from 'react';
import PropTypes from 'prop-types';

const DisplayField = ({ value }) => {
  const getValue = () => {
    if (value === null || value === undefined) {
      return '';
    }
    if (typeof value === 'number') {
      return value.toString();
    }
    return value;
  };

  return (
    <div
      className="display-field"
      aria-label="Display field"
      aria-live="polite"
      aria-atomic="true"
    >
      <p>{getValue()}</p>
    </div>
  );
};

DisplayField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DisplayField.defaultProps = {
  value: '',
};

export default DisplayField;