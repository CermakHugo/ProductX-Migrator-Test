

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import TrimmedString from './components/TrimmedString';
import TimePicker from './components/TimePicker';
import Calculator from './components/Calculator';
import NavigationPage from './components/NavigationPage';

const App = () => {
  const [time, setTime] = useState(new Date());
  const [calculation, setCalculation] = useState('');
  const [navigation, setNavigation] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleCalculation = (result) => {
    setCalculation(result);
  };

  const handleNavigation = (page) => {
    setNavigation(page);
  };

  return (
    <div>
      <TrimmedString />
      <TimePicker time={time} />
      <Calculator onCalculate={handleCalculation} />
      <NavigationPage onPageChange={handleNavigation} currentPage={navigation} />
      {calculation && <p>Calculation result: {calculation}</p>}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));