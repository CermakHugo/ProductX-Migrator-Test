

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClearEntryButton = () => {
  const [entry, setEntry] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      const response = await axios.post('/clearEntry');
      if (response.data && response.data.entry && response.data.result) {
        setEntry(response.data.entry);
        setResult(response.data.result);
      } else {
        setError('Invalid response data');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <button onClick={handleClick}>Clear Entry</button>
  );
};

export default ClearEntryButton;