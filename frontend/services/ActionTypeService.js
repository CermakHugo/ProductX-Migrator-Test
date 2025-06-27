

import axios from 'axios';
import logger from '../utils/logger';

const ActionTypeService = {
  getActionType: async () => {
    try {
      const response = await axios.get('/api/action-types', {
        validateStatus: (status) => {
          return status >= 200 && status < 300;
        },
      });

      if (response.data) {
        try {
          const jsonData = JSON.parse(JSON.stringify(response.data));
          logger.info('Action type data retrieved successfully');
          return jsonData;
        } catch (error) {
          logger.error('Error parsing response data as JSON');
          throw error;
        }
      } else {
        logger.error('No data returned from backend API');
        throw new Error('No data returned from backend API');
      }
    } catch (error) {
      if (error.response) {
        logger.error(`Error fetching action type data: ${error.response.status} ${error.response.statusText}`);
      } else {
        logger.error('Error fetching action type data');
      }
      throw error;
    }
  },
};

export default ActionTypeService;