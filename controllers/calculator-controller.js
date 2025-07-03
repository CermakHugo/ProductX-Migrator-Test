
const express = require('express');
const router = express.Router();
const CalculatorService = require('../services/calculator.service');
const errorHandler = require('../errorHandler');

router.get('/initializeUI', async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).send('Method Not Allowed');
    }

    try {
        const initializedUI = await CalculatorService.initializeUI();
        if (typeof initializedUI !== 'object') {
            throw new Error('Invalid response from CalculatorService.initializeUI');
        }
        res.json(initializedUI);
    } catch (error) {
        const errorResponse = errorHandler.handleError(error);
        res.status(errorResponse.status).send(errorResponse.message);
    }
});

module.exports = router;
