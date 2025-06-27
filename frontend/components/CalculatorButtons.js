

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CalculatorButtons = ({ handleInput }) => {
  const buttons = [
    { id: 1, value: '7', type: 'number' },
    { id: 2, value: '8', type: 'number' },
    { id: 3, value: '9', type: 'number' },
    { id: 4, value: '/', type: 'operator' },
    { id: 5, value: '4', type: 'number' },
    { id: 6, value: '5', type: 'number' },
    { id: 7, value: '6', type: 'number' },
    { id: 8, value: '*', type: 'operator' },
    { id: 9, value: '1', type: 'number' },
    { id: 10, value: '2', type: 'number' },
    { id: 11, value: '3', type: 'number' },
    { id: 12, value: '-', type: 'operator' },
    { id: 13, value: '0', type: 'number' },
    { id: 14, value: '.', type: 'number' },
    { id: 15, value: '=', type: 'equals' },
    { id: 16, value: '+', type: 'operator' },
    { id: 17, value: 'C', type: 'clear' },
  ];

  return (
    <div className="calculator-buttons">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => handleInput(button.value, button.type)}
        >
          {button.value}
        </button>
      ))}
    </div>
  );
};

CalculatorButtons.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export default CalculatorButtons;