

import React, { useState, useEffect } from 'react';
import './TimePicker.css';
import { updateCalculator } from '../api/calculatorApi';
import { validateTime } from '../utils/validation';

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [error, setError] = useState(null);

  const handleTimeChange = (event) => {
    const time = event.target.value;
    if (validateTime(time)) {
      setSelectedTime(time);
    } else {
      setError('Invalid time format. Please use HH:mm');
    }
  };

  useEffect(() => {
    if (selectedTime) {
      updateCalculator(selectedTime)
        .then(() => {
          console.log('Calculator updated successfully');
        })
        .catch((error) => {
          setError('Error updating calculator: ' + error.message);
        });
    }
  }, [selectedTime]);

  return (
    <div className="time-picker">
      <input
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
        className="time-picker-input"
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default TimePicker;