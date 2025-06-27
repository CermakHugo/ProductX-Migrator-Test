

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CalculationType = () => {
  const [input, setInput] = useState('');
  const [calculationType, setCalculationType] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleGetCalculationType = () => {
    if (!input.trim()) {
      setError('Please enter a valid input');
      return;
    }

    setLoading(true);
    axios.get(`/getCalculationType?input=${input}`)
      .then((response) => {
        setCalculationType(response.data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleGetCalculationType} disabled={loading}>
        {loading ? 'Loading...' : 'Get Calculation Type'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Calculation Type: {calculationType}</p>
    </div>
  );
};

export default CalculationType;