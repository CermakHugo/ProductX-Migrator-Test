

const express = require('express');
const percentageCalculator = require('../services/percentageCalculator');

const router = express.Router();

const handlePercentageRequest = async (req, res) => {
    try {
        const { value, percentage } = req.body;
        if (!value || !percentage) {
            res.status(400).json({ error: 'Value and percentage are required' });
            return;
        }
        const result = await percentageCalculator.calculatePercentage(value, percentage);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

router.post('/', handlePercentageRequest);

module.exports = router;