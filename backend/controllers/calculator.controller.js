

```javascript
const express = require('express');
const { createStore } = require('redux');
const CalculatorService = require('../services/calculator.service');
const CalculatorModel = require('../models/calculator.model');

const calculatorController = express.Router();

const initialState = {
  input: '',
  result: '',
  calculation: '',
  displayField: ''
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return { ...state, input: action.payload };
    case 'UPDATE_RESULT':
      return { ...state, result: action.payload };
    case 'UPDATE_CALCULATION':
      return { ...state, calculation: action.payload };
    case 'UPDATE_DISPLAY_FIELD':
      return { ...state, displayField: action.payload };
    default:
      return state;
  }
};

const store = createStore(calculatorReducer);

class CalculatorController {
  handleTextInput(input) {
    if (input === 'C') {
      this.handleClearButtonClick();
    } else if (input === '=') {
      this.handleCalculateButtonClick();
    } else {
      store.dispatch({ type: 'UPDATE_INPUT', payload: input });
    }
  }

  handleClearButtonClick() {
    store.dispatch({ type: 'UPDATE_CALCULATION', payload: '' });
    store.dispatch({ type: 'UPDATE_RESULT', payload: '' });
  }

  handleCalculateButtonClick() {
    const calculation = store.getState().calculation;
    const result = CalculatorService.calculate(calculation);
    store.dispatch({ type: 'UPDATE_RESULT', payload: result });
  }

  clear() {
    CalculatorService.clear();
    store.dispatch({ type: 'UPDATE_CALCULATION', payload: '' });
    store.dispatch({ type: 'UPDATE_RESULT', payload: '' });
  }

  onCalculate(calculation) {
    const result = CalculatorService.calculate(calculation);
    store.dispatch({ type: 'UPDATE_RESULT', payload: result });
  }

  updateDisplayField(result) {
    store.dispatch({ type: 'UPDATE_DISPLAY_FIELD', payload: result });
  }

  handleKeypadPress(key) {
    const currentCalculation = store.getState().calculation;
    const updatedCalculation = CalculatorService.appendDigit(currentCalculation, key);
    store.dispatch({ type: 'UPDATE_CALCULATION', payload: updatedCalculation });
  }

  calculate(calculation) {
    return CalculatorService.calculate(calculation);
  }

  percentage(calculation) {
    return CalculatorService.percentage(calculation);
  }

  getDisplayResult() {
    return store.getState().displayField;
  }

  handleButtonClick(button) {
    const currentCalculation = store.getState().calculation;
    const updatedCalculation = CalculatorService.handleButtonClick(currentCalculation, button);
    store.dispatch({ type: 'UPDATE_CALCULATION', payload: updatedCalculation });
  }

  displayResult(result) {
    store.dispatch({ type: 'UPDATE_DISPLAY_FIELD', payload: result });
  }
}

calculatorController.post('/calculate', (req, res) => {
  const { numbers, operator } = req.body;
  const result = CalculatorService.calculate(numbers, operator);
  store.dispatch({ type: 'UPDATE_RESULT', payload: result });
  res.json({ result });
});

calculatorController.post('/append-digit', (req, res) => {
  const { digit } = req.body;
  const currentCalculation = store.getState().calculation;
  const updatedCalculation = CalculatorService.appendDigit(currentCalculation, digit);
  store.dispatch({ type: 'UPDATE_CALCULATION', payload: updatedCalculation });
  res.json({ calculation: updatedCalculation });
});

calculatorController.post('/clear-calculator-entry', (req, res) => {
  CalculatorService.clear();
  store.dispatch({ type: 'UPDATE_CALCULATION', payload: '' });
  store.dispatch({ type: 'UPDATE_RESULT', payload: '' });
  res.json({ message: 'Calculator entry cleared' });
});

calculatorController.post('/handle-button-click', (req, res) => {
  const { button } = req.body;
  const currentCalculation = store.getState().calculation;
  const updatedCalculation = CalculatorService.handleButtonClick(currentCalculation, button);
  store.dispatch({ type: 'UPDATE_CALCULATION', payload: updatedCalculation });
  res.json({ calculation: updatedCalculation });
});

calculatorController.post('/display-result', (req, res) => {
  const result = store.getState().result;
  res.json({ result });
});

module.exports = calculatorController;
```