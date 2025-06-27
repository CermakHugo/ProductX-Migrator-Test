

import axios from 'axios';
import { validate } from 'uuid';

const timeService = {
  updateTime: async (newTime) => {
    if (!validate(newTime)) {
      throw new Error('Invalid time value');
    }

    try {
      const response = await axios.put('/api/time/update', { time: newTime });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`API request failed: ${error.message}`);
      } else {
        throw new Error(`Unexpected error: ${error.message}`);
      }
    }
  },
};

export default timeService;