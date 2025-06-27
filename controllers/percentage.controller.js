

const express = require('express');
const calculatorService = require('../services/calculator.service');
const router = express.Router();

router.post('/percentage', (req, res) => {
  if (!req.body.currentValue) {
    return res.status(400).json({ error: 'Current value is required' });
  }

  try {
    const currentValue = req.body.currentValue;
    const percentage = calculatorService.calculatePercentage(currentValue);
    res.json({ percentage });
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate percentage' });
  }
});

module.exports = router;