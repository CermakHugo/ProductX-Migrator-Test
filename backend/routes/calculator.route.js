

const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculator.controller');

router.post('/calculate', (req, res) => {
    const { inputValues, operator } = req.body;
    calculatorController.onCalculate(inputValues, operator)
        .then(result => res.json(result))
        .catch(error => res.status(500).json({ error: 'Failed to calculate' }));
});

router.get('/percentage', calculatorController.percentage);
router.get('/get-display-result', calculatorController.getDisplayResult);
router.post('/handle-keypad-press', calculatorController.handleKeypadPress);

router.get('/display-result', (req, res) => {
    calculatorController.handleDisplayResult(req, res);
});

module.exports = router;