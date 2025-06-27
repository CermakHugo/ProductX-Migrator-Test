

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick }) => {
  if (typeof label !== 'string' || label === null) {
    throw new Error('Label prop must be a non-null string');
  }

  if (typeof onClick !== 'function' || onClick === null) {
    throw new Error('onClick prop must be a non-null function');
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      role="button"
      tabIndex={0}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  label: '',
  onClick: () => {},
};

export default Button;