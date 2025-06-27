

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrimmedString = ({ inputString }) => {
  const [trimmedString, setTrimmedString] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const trimString = async () => {
      try {
        if (!inputString) {
          setTrimmedString('');
          setError('Input string is empty or null');
          return;
        }

        const response = await axios.post('/strings/trim', { inputString });

        if (!response.data || !response.data.trimmedString) {
          setTrimmedString('');
          setError('API endpoint returned an empty or null response');
          return;
        }

        setTrimmedString(response.data.trimmedString);
        setError(null);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    };
    trimString();
  }, [inputString]);

  return (
    <div>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p>{trimmedString}</p>
      )}
    </div>
  );
};

export default TrimmedString;