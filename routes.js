

import CalculatorController from './calculator.controller.js';
import express from 'express';

const router = express.Router();

router.post('/PerformArithmeticOperation', CalculatorController.performArithmeticOperation);
router.get('/GetCalculatorState', CalculatorController.getCalculatorState);

export default router;