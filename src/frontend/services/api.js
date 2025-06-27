

import axios from 'axios';
import logger from './logger';

const api = axios.create({
  baseURL: 'https://your-api-base-url.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

const calculate = (data) => {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid input data');
  }

  return api.post('/calculate', data)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Unexpected response status: ${response.status}`);
      }

      const result = response.data;
      if (!result || typeof result !== 'object') {
        throw new Error('Invalid response data');
      }

      return result;
    })
    .catch((error) => {
      logger.error('Error during calculation:', error);
      throw error;
    });
};

export { calculate };