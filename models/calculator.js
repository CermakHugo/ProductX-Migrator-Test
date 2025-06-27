

class Calculator {
    constructor() {
        this._state = {
            result: 0,
            lastOperation: null,
            lastNumber: null,
            history: []
        };
    }

    add(number) {
        this._validateNumber(number);
        const result = this._state.result + number;
        this._updateState('add', number, result);
    }

    subtract(number) {
        this._validateNumber(number);
        const result = this._state.result - number;
        this._updateState('subtract', number, result);
    }

    multiply(number) {
        this._validateNumber(number);
        const result = this._state.result * number;
        this._updateState('multiply', number, result);
    }

    divide(number) {
        this._validateNumber(number);
        if (number !== 0) {
            const result = this._state.result / number;
            this._updateState('divide', number, result);
        } else {
            throw new Error('Cannot divide by zero');
        }
    }

    reset() {
        this._state = {
            result: 0,
            lastOperation: null,
            lastNumber: null,
            history: []
        };
    }

    getHistory() {
        return this._state.history;
    }

    getResult() {
        return this._state.result;
    }

    getLastOperation() {
        return this._state.lastOperation;
    }

    getLastNumber() {
        return this._state.lastNumber;
    }

    _validateNumber(number) {
        if (typeof number !== 'number') {
            throw new Error('Input is not a number');
        }
    }

    _updateState(operation, number, result) {
        if (isNaN(result)) {
            throw new Error('Result is not a number');
        }
        this._state.result = result;
        this._state.lastOperation = operation;
        this._state.lastNumber = result;
        this._state.history.push({ operation, number: result });
    }
}

export default Calculator;