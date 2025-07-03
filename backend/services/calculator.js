class Calculator {
    constructor() {
        this.currentEntry = '';
        this.operator = '';
        this.result = 0;
    }

    handleKeypadPress(key) {
        if (isNaN(key) && key !== '.' && key !== '=' && key !== '%' && !['+', '-', '*', '/'].includes(key)) {
            console.log('Invalid input');
            return;
        }

        if (key === '=' ) {
            if (this.currentEntry === '') {
                console.log('Please enter a number');
                return;
            }
            this.calculate();
        } else if (key === '%') {
            if (this.currentEntry === '') {
                console.log('Please enter a number');
                return;
            }
            this.percentage();
        } else if (['+', '-', '*', '/'].includes(key)) {
            if (this.currentEntry === '') {
                console.log('Please enter a number');
                return;
            }
            this.operator = key;
            this.calculate();
        } else {
            if (key === '.' && this.currentEntry.includes('.')) {
                console.log('Only one decimal point is allowed');
                return;
            }
            this.currentEntry += key;
        }
    }

    calculate() {
        if (this.operator === '+') {
            this.result = parseFloat(this.result) + parseFloat(this.currentEntry);
        } else if (this.operator === '-') {
            this.result = parseFloat(this.result) - parseFloat(this.currentEntry);
        } else if (this.operator === '*') {
            this.result = parseFloat(this.result) * parseFloat(this.currentEntry);
        } else if (this.operator === '/') {
            if (this.currentEntry !== '0') {
                this.result = parseFloat(this.result) / parseFloat(this.currentEntry);
            } else {
                console.log('Cannot divide by zero');
                return;
            }
        }
        this.displayResult();
    }

    percentage() {
        this.result = (parseFloat(this.currentEntry) / 100);
        this.displayResult();
    }

    getDisplayResult() {
        return this.result.toString();
    }

    displayResult() {
        console.log(this.getDisplayResult());
        this.currentEntry = '';
        this.operator = '';
        this.result = 0;
    }

    addition() {
        this.operator = '+';
        this.calculate();
    }

    subtraction() {
        this.operator = '-';
        this.calculate();
    }

    multiplication() {
        this.operator = '*';
        this.calculate();
    }

    division() {
        this.operator = '/';
        this.calculate();
    }
}

module.exports = Calculator;
