class CalculatorModel {
    constructor() {
        this.input = '';
        this.operator = '';
        this.result = '';
    }
}

class Calculator {
    constructor() {
        this.calculatorModel = new CalculatorModel();
        this.OPERATORS = ['+', '-', '*', '/'];
    }

    updateCalculationData(input, operator) {
        this.calculatorModel.input += input;
        this.calculatorModel.operator = operator;
        this.calculateResult();
    }

    getResult() {
        return this.calculatorModel.result;
    }

    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        if (y === 0) {
            throw new Error('Cannot divide by zero');
        }
        return x / y;
    }

    appendDigit(digit) {
        this.calculatorModel.input += digit;
        this.calculateResult();
    }

    calculateResult() {
        if (this.calculatorModel.operator === '+') {
            this.calculatorModel.result = this.add(parseFloat(this.calculatorModel.input), 0);
        } else if (this.calculatorModel.operator === '-') {
            this.calculatorModel.result = this.subtract(parseFloat(this.calculatorModel.input), 0);
        } else if (this.calculatorModel.operator === '*') {
            this.calculatorModel.result = this.multiply(parseFloat(this.calculatorModel.input), 1);
        } else if (this.calculatorModel.operator === '/') {
            this.calculatorModel.result = this.divide(parseFloat(this.calculatorModel.input), 1);
        }
    }

    initializeCalculatorState() {
        this.calculatorModel.input = '';
        this.calculatorModel.operator = '';
        this.calculatorModel.result = '';
    }
}

export default Calculator