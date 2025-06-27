

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json()));

const calculator = {
    value: 0,
    history: [],
    operator: null
};

const validateInput = (input) => {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operators = ['+', '-', '*', '/'];
    if (digits.includes(input)) {
        return 'digit';
    } else if (operators.includes(input)) {
        return 'operator';
    } else if (input === 'clear') {
        return 'clear';
    } else if (input === '=') {
        return 'equals';
    } else {
        return 'invalid';
    }
};

const performCalculation = (operator) => {
    switch (operator) {
        case '+':
            return calculator.history.pop() + calculator.value;
        case '-':
            return calculator.history.pop() - calculator.value;
        case '*':
            return calculator.history.pop() * calculator.value;
        case '/':
            return calculator.history.pop() / calculator.value;
        default:
            return calculator.value;
    }
};

router.post('/keypadPress', (req, res) => {
    const input = req.body.input;
    const type = validateInput(input);
    if (type === 'digit') {
        calculator.value = calculator.value * 10 + parseInt(input);
        res.json({ result: calculator.value.toString() });
    } else if (type === 'operator') {
        calculator.history.push(calculator.value);
        calculator.value = 0;
        calculator.operator = input;
        res.json({ result: '' });
    } else if (type === 'clear') {
        calculator.value = 0;
        calculator.history = [];
        calculator.operator = null;
        res.json({ result: '0' });
    } else if (type === 'equals') {
        if (calculator.operator !== null) {
            calculator.value = performCalculation(calculator.operator);
            calculator.operator = null;
            res.json({ result: calculator.value.toString() });
        } else {
            res.json({ result: calculator.value.toString() });
        }
    } else if (type === 'invalid') {
        res.status(400).json({ error: 'Invalid input' });
    }
});

module.exports = router;