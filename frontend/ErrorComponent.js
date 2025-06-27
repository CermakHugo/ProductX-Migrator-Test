

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ErrorComponent = () => {
  const [errorMessages, setErrorMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchErrorMessages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/error-messages');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setErrorMessages(data);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchErrorMessages();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error occurred while fetching error messages</div>;
  }

  return (
    <div>
      <h2>Error Messages:</h2>
      <ul>
        {Array.isArray(errorMessages) &&
          errorMessages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
      </ul>
    </div>
  );
};

ErrorComponent.propTypes = {
  errorMessages: PropTypes.arrayOf(PropTypes.string),
};

export default ErrorComponent;