

const express = require('express');
const router = express.Router();
const CalculatorController = require('./calculator.controller');

router.post('/CreateCalculatorInstance', (req, res, next) => {
    try {
        CalculatorController.createCalculatorInstance(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;