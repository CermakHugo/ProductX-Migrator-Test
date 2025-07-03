
const logger = require('logger');

class Calculator {
    constructor() {
        this.currentEntry = '';
        this.displayField = '';
        this.memory = {};
    }

    appendDigit(digit) {
        if (typeof digit !== 'string' || !/^\d$/.test(digit)) {
            logger.error('Invalid input for appendDigit method');
            throw new Error('Invalid input for appendDigit method');
        }
        this.currentEntry += digit;
        this.displayField = this.currentEntry;
        this.memory[this.currentEntry] = this.currentEntry;
        return this.displayField;
    }

    updateEntry(entry) {
        if (typeof entry !== 'string' || !/^\d+|\+|-|\*|\/$/.test(entry)) {
            logger.error('Invalid input for updateEntry method');
            throw new Error('Invalid input for updateEntry method');
        }
        this.currentEntry += entry;
        this.displayField = this.currentEntry;
        this.memory[this.currentEntry] = this.currentEntry;
    }

    getMemory() {
        return this.memory;
    }
}

module.exports = Calculator;
