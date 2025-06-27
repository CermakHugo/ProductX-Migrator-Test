

package services;

import axios from 'axios';
import _ from 'lodash';
import math from 'mathjs';
import express from 'express';
import { createStore, combineReducers } from 'redux';

const router = express.Router();

const displayFieldReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_DISPLAY_FIELD':
      return action.payload;
    default:
      return state;
  }
};

const calculatorTabReducer = (state = '', action) => {
  switch (action.type) {
    case 'SWITCH_CALCULATOR_TAB':
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(combineReducers({ displayField: displayFieldReducer, calculatorTab: calculatorTabReducer }));

class CalculatorService {
  constructor() {
    this.displayField = '';
    this.calculationString = '';
  }

  performCalculation(number, operator) {
    try {
      let result;
      switch (operator) {
        case '+':
          result = number + this.displayField;
          break;
        case '-':
          result = this.displayField - number;
          break;
        case '*':
          result = this.displayField * number;
          break;
        case '/':
          result = this.displayField / number;
          break;
        default:
          throw new Error('Invalid operator');
      }
      return { result };
    } catch (error) {
      console.error(error);
      return { error: 'Calculation failed' };
    }
  }

  updateDisplay(result) {
    try {
      store.dispatch({ type: 'UPDATE_DISPLAY_FIELD', payload: result });
      this.displayField = result;
    } catch (error) {
      console.error(error);
    }
  }

  initializeCalculator(handle, ownership) {
    try {
      const response = await axios.post('/initialize-calculator', { handle, ownership });
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: 'Initialization failed' };
    }
  }

  appendDigit(digit) {
    try {
      this.calculationString += digit;
      const result = math.evaluate(this.calculationString);
      return { result };
    } catch (error) {
      console.error(error);
      return { error: 'Calculation failed' };
    }
  }

  appendOperator(operator) {
    try {
      this.calculationString += operator;
      const result = math.evaluate(this.calculationString);
      return { result };
    } catch (error) {
      console.error(error);
      return { error: 'Calculation failed' };
    }
  }

  evaluateCalculation(calculationString) {
    try {
      const result = math.evaluate(calculationString);
      return { result };
    } catch (error) {
      console.error(error);
      return { error: 'Calculation failed' };
    }
  }

  clearCalculation() {
    try {
      this.calculationString = '';
      this.displayField = '';
      return { success: true };
    } catch (error) {
      console.error(error);
      return { error: 'Clearing calculation failed' };
    }
  }

  getDisplayField() {
    try {
      const response = await axios.get('/display-field');
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: 'Failed to retrieve display field' };
    }
  }

  switchCalculatorTab(tabState) {
    try {
      store.dispatch({ type: 'SWITCH_CALCULATOR_TAB', payload: tabState });
      const response = await axios.post('/calculator-tab', { tabState });
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: 'Failed to switch calculator tab' };
    }
  }
}

export default CalculatorService;