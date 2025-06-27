

const db = require('./database');

class Calculator {
    constructor() {
        this.history = [];
    }

    add(x, y) {
        try {
            if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
                throw new Error('Invalid input: Both inputs must be numbers');
            }
            const result = parseFloat(x) + parseFloat(y);
            this.history.push({ operation: 'add', x, y, result });
            db.storeCalculation({ operation: 'add', x, y, result });
            return result;
        } catch (e) {
            throw new Error(`Calculation error: ${e.message}`);
        }
    }

    subtract(x, y) {
        try {
            if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
                throw new Error('Invalid input: Both inputs must be numbers');
            }
            const result = parseFloat(x) - parseFloat(y);
            this.history.push({ operation: 'subtract', x, y, result });
            db.storeCalculation({ operation: 'subtract', x, y, result });
            return result;
        } catch (e) {
            throw new Error(`Calculation error: ${e.message}`);
        }
    }

    multiply(x, y) {
        try {
            if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
                throw new Error('Invalid input: Both inputs must be numbers');
            }
            const result = parseFloat(x) * parseFloat(y);
            this.history.push({ operation: 'multiply', x, y, result });
            db.storeCalculation({ operation: 'multiply', x, y, result });
            return result;
        } catch (e) {
            throw new Error(`Calculation error: ${e.message}`);
        }
    }

    divide(x, y) {
        try {
            if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
                throw new Error('Invalid input: Both inputs must be numbers');
            }
            if (y === 0) {
                throw new Error('Cannot divide by zero');
            }
            const result = parseFloat(x) / parseFloat(y);
            this.history.push({ operation: 'divide', x, y, result });
            db.storeCalculation({ operation: 'divide', x, y, result });
            return result;
        } catch (e) {
            throw new Error(`Calculation error: ${e.message}`);
        }
    }

    getHistory() {
        return this.history;
    }

    getCalculationHistory() {
        return db.getCalculationHistory();
    }
}

module.exports = Calculator;