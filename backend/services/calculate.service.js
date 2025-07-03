import axios from 'axios';
import _ from 'lodash';
import calculate from '../controllers/calculate.controller';

const operators = ['+', '-', '*', '/'];

const performCalculation = async (numbers, operator) => {
    const currentEntry = numbers.join('');
    if (!_.includes(operators, operator)) {
        return { error: 'Invalid operator' };
    }

    try {
        const result = await calculate(numbers, operator);
        if (result === Infinity) {
            return { error: 'Division by zero' };
        }
        return { result };
    } catch (error) {
        return { error: 'Internal server error' };
    }
};

export default performCalculation;