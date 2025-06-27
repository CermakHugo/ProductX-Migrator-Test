

const express = require('express');
const bodyParser = require('body-parser');
const calculator = require('./calculator');

const app = express();
app.use(bodyParser.json());

app.post('/api/calculator/getResult', (req, res) => {
  if (!req.body || !req.body.numbers || !req.body.operator) {
    res.status(400).json({ error: 'Invalid request body' });
    return;
  }

  try {
    const calculationData = req.body;
    try {
      const result = calculator.calculate(calculationData);
      res.json({ result });
    } catch (error) {
      res.status(500).json({ error: 'Error performing calculation' });
    }
  }
});

app.get('/GetCurrentCalculation', (req, res) => {
  try {
    const currentCalculation = calculator.getCurrentCalculation();
    res.json({ currentCalculation });
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving current calculation' });
  }
});

app.post('/calculate', (req, res) => {
  if (!req.body || !req.body.numbers || !req.body.operator) {
    res.status(400).json({ error: 'Invalid request body' });
    return;
  }

  const calculationData = req.body;
  try {
    const result = calculator.calculate(calculationData);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: 'Error performing calculation' });
  }
});

app.post('/append-operator', (req, res) => {
  if (!req.body || !req.body.operator) {
    res.status(400).json({ error: 'Invalid request body' });
    return;
  }

  const operator = req.body.operator;
  try {
    const result = calculator.appendOperator(operator);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: 'Error appending operator' });
  }
});

module.exports = app;