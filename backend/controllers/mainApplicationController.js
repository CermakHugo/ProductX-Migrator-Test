

const express = require('express');
const router = express.Router();
const Calculator = require('../models/calculator');

router.post('/calculate', (req, res) => {
    const { input, operator } = req.body;
    const calculator = new Calculator();
    let result;

    if (operator === 'add') {
        result = calculator.add(input);
    } else if (operator === 'subtract') {
        result = calculator.subtract(input);
    } else if (operator === 'multiply') {
        result = calculator.multiply(input);
    } else if (operator === 'divide') {
        result = calculator.divide(input);
    }

    res.json({ result });
});

router.post('/clear', (req, res) => {
    const calculator = new Calculator();
    calculator.clear();
    res.json({ message: 'Entry cleared' });
});

router.post('/update-display', (req, res) => {
    const { input } = req.body;
    const calculator = new Calculator();
    const result = calculator.calculate(input);
    res.json({ result });
});

router.post('/handle-button-press', (req, res) => {
    const { input, buttonType } = req.body;
    const calculator = new Calculator();

    if (buttonType === 'number') {
        calculator.appendNumber(input);
    } else if (buttonType === 'operator') {
        calculator.setOperator(input);
    } else if (buttonType === 'clear') {
        calculator.clear();
    }

    res.json({ message: 'Button press handled' });
});

module.exports = router;