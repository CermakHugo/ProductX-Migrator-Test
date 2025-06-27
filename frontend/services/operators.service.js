

import axios from 'axios';

/**
 * Service class responsible for handling the "GetOperators" endpoint.
 */
class OperatorsService {
  /**
   * Makes a GET request to the /operators API endpoint and returns the response data.
   * @returns {Promise<Object[]>} A promise that resolves with the response data.
   */
  getOperators() {
    return axios.get('/operators')
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      })
      .catch(error => {
        if (error.response) {
          throw new Error(`API error: ${error.response.status} - ${error.response.statusText}`);
        } else {
          throw new Error(`Network error: ${error.message}`);
        }
      });
  }
}

export default OperatorsService;