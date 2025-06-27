

import React, { useState } from 'react';
import axios from 'axios';

const ResetCalculationButton = () => {
  const [resetCalculation, setResetCalculation] = useState(false);
  const [error, setError] = useState(null);

  const handleResetCalculation = () => {
    axios.post('/resetCalculation')
      .then((response) => {
        if (response.status === 200 && response.data.success) {
          setResetCalculation(true);
        } else {
          setError('Unexpected response from API');
        }
      })
      .catch((error) => {
        if (error.response) {
          setError(`Error: ${error.response.status} - ${error.response.statusText}`);
        } else if (error.request) {
          setError('Network error');
        } else {
          setError('Error sending request');
        }
      });
  };

  return (
    <button onClick={handleResetCalculation}>
      Reset Calculation
    </button>
  );
};

export default ResetCalculationButton;