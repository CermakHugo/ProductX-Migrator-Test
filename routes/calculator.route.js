

const express = require('express');
const CalculatorController = require('./calculator.controller');

const router = express.Router();

router.post('/initialize-calculator', (req, res, next) => {
    try {
        CalculatorController.initializeCalculator(req, res, next);
    } catch (error) {
        next(error);
    }
});

router.post('/evaluateCalculation', (req, res, next) => {
    try {
        CalculatorController.evaluateCalculation(req, res, next);
    } catch (error) {
        next(error);
    }
});

router.get('/calculateExpression', (req, res, next) => {
    try {
        CalculatorController.calculateExpression(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;