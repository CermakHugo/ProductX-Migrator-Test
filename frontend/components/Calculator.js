

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateCalculatorEntry, clearDisplayField } from '../actions/calculatorActions';

const Calculator = ({ updateCalculatorEntry, clearDisplayField, calculatorEntry, displayField }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [currentEntry, setCurrentEntry] = useState('');
  const [operator, setOperator] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (calculatorEntry) {
      setCurrentEntry(calculatorEntry);
    }
  }, [calculatorEntry]);

  useEffect(() => {
    if (displayField) {
      setResult(displayField);
    }
  }, [displayField]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    axios.post('/calculate', { input, operator })
      .then((response) => {
        setResult(response.data.result);
        updateCalculatorEntry('');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleClear = () => {
    setCurrentEntry('');
    setResult('');
    clearDisplayField();
  };

  const handleKeypadPress = (buttonValue) => {
    if (buttonValue === 'C') {
      handleClear();
    } else if (buttonValue === '%') {
      percentage();
    } else if (buttonValue === '=') {
      handleCalculate();
    } else {
      setInput(input + buttonValue);
      updateCalculatorEntry(input + buttonValue);
    }
  };

  const calculate = (operator) => {
    axios.post('/perform-arithmetic-operation', { input, operator })
      .then((response) => {
        setResult(response.data.result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const percentage = () => {
    axios.post('/percentage', { input })
      .then((response) => {
        setResult(response.data.result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const displayResult = () => {
    if (error) {
      return error;
    }
    return result.toString();
  };

  const handleClearButtonPress = () => {
    handleClear();
  };

  return (
    <div>
      <InputField value={input} onChange={handleInputChange} />
      <ButtonPanel onClick={handleKeypadPress} />
      <DisplayField value={displayResult()} />
      <PercentageButton onClick={percentage} />
      <ClearButton onClick={handleClearButtonPress} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    calculatorEntry: state.calculatorEntry,
    displayField: state.displayField,
  };
};

export default connect(mapStateToProps, { updateCalculatorEntry, clearDisplayField })(Calculator);