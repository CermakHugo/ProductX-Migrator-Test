

const express = require('express');
const CalculatorController = require('../controllers/CalculatorController');

const router = express.Router();

router.post('/clearDisplayField', CalculatorController.clearDisplayField);

module.exports = router;