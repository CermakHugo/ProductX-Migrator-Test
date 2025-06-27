

import axios from 'axios';
import logger from './logger';

const api = axios.create({
  baseURL: 'https://example.com/api',
});

const validateInput = (input) => {
  if (typeof input !== 'object' || input === null) {
    throw new Error('Invalid input: input must be an object');
  }
  if (!input.hasOwnProperty('expression')) {
    throw new Error('Invalid input: input must have an "expression" property');
  }
  if (typeof input.expression !== 'string') {
    throw new Error('Invalid input: expression must be a string');
  }
};

const sendUserInput = async (input) => {
  try {
    validateInput(input);
    const response = await api.post('/calculate', input);
    return response.data;
  } catch (error) {
    if (error.response) {
      logger.error(`Error sending user input: ${error.response.data}`);
      throw error.response.data;
    } else {
      logger.error(`Error sending user input: ${error.message}`);
      throw error;
    }
  }
};

const getResults = async () => {
  try {
    const response = await api.get('/results');
    return response.data;
  } catch (error) {
    if (error.response) {
      logger.error(`Error getting results: ${error.response.data}`);
      throw error.response.data;
    } else {
      logger.error(`Error getting results: ${error.message}`);
      throw error;
    }
  }
};

export { sendUserInput, getResults };