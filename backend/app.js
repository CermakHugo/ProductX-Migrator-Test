

const express = require('express');
const mainApplicationRouter = require('./mainApplicationRouter');
const CalculatorController = require('./calculator.controller');
const percentageController = require('./percentageController');

const app = express();

const calculatorController = new CalculatorController();

app.use('/maui', mainApplicationRouter);

app.post('/createMauiApp', (req, res) => {
    const { appName, appDescription } = req.body;
    if (!appName || !appDescription) {
        res.status(400).send({ error: 'Invalid request' });
        return;
    }
    const mauiApp = {
        appName,
        appDescription
    };
    res.send(mauiApp);
});

app.post('/calculate', (req, res) => {
    try {
        const { num1, operator, num2 } = req.body;
        if (!num1 || num2 || operator;
        if (!['+', '-', '*', '/'].includes(operator)) {
            res.status(400).send({ error: 'Invalid operator' });
            return;
        }
        calculatorController.calculate(req, res);
    } catch (error) {
        res.status(500).send({ error: 'Error during calculation' });
    }
});

app.post('/clear', (req, res) => {
    try {
        calculatorController.clear(req, res);
    } catch (error) {
        res.status(500).send({ error: 'Error during clearing' });
    }
});

app.post('/percentage', percentageController);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});