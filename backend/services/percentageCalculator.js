

const express = require('express');
const app = express();
app.use(express.json());

function calculatePercentage(num1, num2, operator) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Invalid input numbers');
    }
    if (num1 === 0 || num2 === 0) {
        throw new Error('Input numbers cannot be zero');
    }
    if (!['add', 'subtract', 'multiply', 'divide'].includes(operator)) {
        throw new Error('Invalid operator');
    }
    if (operator === 'add') {
        return ((num1 + num2) / num1) * 100;
    } else if (operator === 'subtract') {
        return ((num1 - num2) / num1) * 100;
    } else if (operator === 'multiply') {
        return ((num1 * num2) / num1) * 100;
    } else if (operator === 'divide') {
        return ((num1 / num2) / num1) * 100;
    }
}

app.post('/percentage', (req, res) => {
    const { num1, num2, operator } = req.body;
    try {
        const result = calculatePercentage(num1, num2, operator);
        res.send({ result });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});