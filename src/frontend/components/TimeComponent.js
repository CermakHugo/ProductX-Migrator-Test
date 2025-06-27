

import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

const TimeComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const handleUpdateTime = async () => {
    try {
      const response = await fetch('/api/time/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ time: new Date().toLocaleTimeString() }),
      });
      if (response.ok) {
        const data = await response.json();
        setCurrentTime(data.time);
      } else {
        throw new Error('Failed to update time');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch('/api/time');
        if (response.ok) {
          const data = await response.json();
          setCurrentTime(data.time);
        } else {
          throw new Error('Failed to fetch time');
        }
      } catch (error) {
        console.error(error);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Current Time: {currentTime}</h1>
      <button onClick={handleUpdateTime}>Update Time</button>
    </div>
  );
};

export default TimeComponent;