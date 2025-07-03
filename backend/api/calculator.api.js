
import express from 'express';
import { handleButtonClick } from '../controllers/calculator.controller.js';

const calculatorApi = (app) => {
    const router = express.Router();
    app.use('/calculator', router);

    router.get('/', (req, res) => {
        res.send('Calculator API');
    });

    router.post('/handleButtonClick', handleButtonClick);

    router.get('/history', (req, res) => {
        // TO DO: implement history endpoint
    });

    router.get('/stats', (req, res) => {
        // TO DO: implement stats endpoint
    });
};

export default calculatorApi;