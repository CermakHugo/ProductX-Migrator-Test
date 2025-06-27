

import axios from 'axios';
import logger from './logger';

const apiEndpoint = '/api/calculator/clearCalculation';

const clearCalculation = async () => {
  try {
    const response = await axios.post(apiEndpoint);
    if (response.status === 200) {
      if (response.data) {
        return response.data;
      } else {
        logger.error('Invalid or missing response data');
        throw new Error('Invalid or missing response data');
      }
    } else {
      logger.error(`API call failed with status code ${response.status}`);
      throw new Error(`API call failed with status code ${response.status}`);
    }
  } catch (error) {
    logger.error(`Error making API call: ${error.message}`);
    throw error;
  }
};

export default clearCalculation;