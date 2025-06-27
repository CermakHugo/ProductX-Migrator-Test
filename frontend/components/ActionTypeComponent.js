

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActionTypeComponent = () => {
  const [userInput, setUserInput] = useState('');
  const [actionType, setActionType] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActionTypeData = async () => {
      try {
        const response = await axios.get('/api/action-types');
        setActionType(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchActionTypeData();
  }, []);

  const handleUserInput = (event) => {
    const userInputValue = event.target.value.trim();
    if (userInputValue) {
      setUserInput(userInputValue);
    } else {
      setUserInput('');
    }
  };

  const renderActionType = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Error: {error}</p>;
    } else if (userInput) {
      const matchingActionType = actionType[userInput];
      if (matchingActionType) {
        return (
          <div>
            <h2>Action Type: {matchingActionType.name}</h2>
            <p>Description: {matchingActionType.description}</p>
          </div>
        );
      } else {
        return <p>No matching action type found.</p>;
      }
    } else {
      return <p>Please enter a value to search for an action type.</p>;
    }
  };

  return (
    <div>
      <input type="text" value={userInput} onChange={handleUserInput} placeholder="Enter a value to search for an action type" />
      {renderActionType()}
    </div>
  );
};

export default ActionTypeComponent;