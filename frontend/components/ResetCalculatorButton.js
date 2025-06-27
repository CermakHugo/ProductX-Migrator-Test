

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ResetCalculatorButton = ({ resetCalculatorApiUrl, onResetSuccess, onResetError }) => {
  const [isAxiosConfigured, setIsAxiosConfigured] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (axios.defaults.baseURL) {
      setIsAxiosConfigured(true);
    }
  }, []);

  const handleReset = async () => {
    if (!isAxiosConfigured) {
      console.error('Axios is not properly configured');
      return;
    }

    setIsResetting(true);

    try {
      const response = await axios.post(resetCalculatorApiUrl);

      if (response.status === 200) {
        onResetSuccess();
      } else {
        onResetError(response.data);
      }
    } catch (error) {
      onResetError(error.response.data);
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <button type="button" onClick={handleReset} disabled={isResetting}>
      {isResetting ? 'Resetting...' : 'Reset Calculator'}
    </button>
  );
};

ResetCalculatorButton.propTypes = {
  resetCalculatorApiUrl: PropTypes.string.isRequired,
  onResetSuccess: PropTypes.func.isRequired,
  onResetError: PropTypes.func.isRequired,
};

ResetCalculatorButton.defaultProps = {
  resetCalculatorApiUrl: '/reset-calculator',
};

export default ResetCalculatorButton;