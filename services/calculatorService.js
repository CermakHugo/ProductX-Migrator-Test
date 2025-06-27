

package services;

import axios from 'axios';
import _ from 'lodash';
import logger from '../logger';

class CalculatorService {
    add(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Invalid input: Both inputs must be numbers.');
        }
        return num1 + num2;
    }

    subtract(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Invalid input: Both inputs must be numbers.');
        }
        return num1 - num2;
    }

    multiply(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Invalid input: Both inputs must be numbers.');
        }
        return num1 * num2;
    }

    divide(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Invalid input: Both inputs must be numbers.');
        }
        if (num2 === 0) {
            throw new Error('Invalid input: Division by zero is not allowed.');
        }
        return num1 / num2;
    }

    async getCalculatorState() {
        try {
            const response = await axios.get('/calculator-api/endpoint');
            if (!response || !response.data) {
                throw new Error('Invalid response from API endpoint');
            }
            const calculatorState = {};
            const responseData = _.get(response, 'data', {});
            calculatorState.currentCalculation = _.get(responseData, 'currentCalculation', '');
            calculatorState.errorMessages = _.get(responseData, 'errorMessages', []);
            return calculatorState;
        } catch (error) {
            logger.error(`Failed to retrieve calculator state: ${error.message}`);
            throw new Error(`Failed to retrieve calculator state: ${error.message}`);
        }
    }
}

export default CalculatorService;