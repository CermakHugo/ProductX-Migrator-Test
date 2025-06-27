

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PreviousNumber = () => {
  const [previousNumber, setPreviousNumber] = useState(null);

  useEffect(() => {
    axios.get('/previousNumber')
      .then(response => {
        setPreviousNumber(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Previous Number:</h2>
      <p>{previousNumber}</p>
    </div>
  );
};

export default PreviousNumber;