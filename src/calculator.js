

```javascript
class Calculator {
    constructor(calculation = '') {
        if (typeof calculation !== 'string') {
            throw new Error('Calculation must be a string');
        }
        this.calculation = calculation;
    }

    appendOperator(operator) {
        if (!['+', '-', '*', '/'].includes(operator)) {
            throw new Error('Invalid operator');
        }

        if (this.calculation === '') {
            throw new Error('Calculation is empty');
        }

        if (!this.calculation.match(/^[0-9]+([+*/-][0-9]+)*$/)) {
            throw new Error('Calculation must end with a number');
        }

        this.calculation += operator;
        return this.calculation;
    }

    calculate() {
        if (!this.calculation.match(/^[0-9]+([+*/-][0-9]+)*$/)) {
            throw new Error('Calculation must end with a number');
        }

        try {
            const result = Function('"use strict";return (' + this.calculation + ')')();
            this.calculation = result.toString();
            return result;
        } catch (error) {
            throw new Error('Invalid calculation');
        }
    }
}

module.exports = Calculator;
```