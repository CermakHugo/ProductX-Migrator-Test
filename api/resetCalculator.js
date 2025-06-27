

package api

import express, { Request, Response, NextFunction } from 'express';
import logger from 'logger';
import { validationResult } from 'express-validator';
import auth from 'auth';
import calculatorService from 'calculatorService';

const resetCalculatorRouter = express.Router();

resetCalculatorRouter.post('/reset-calculator', 
    auth.authenticate,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }

            const calculatorState = await calculatorService.resetCalculatorState();
            logger.info('Reset calculator state:', calculatorState);

            res.status(200).send({ message: 'Calculator reset successfully' });
        } catch (error) {
            logger.error('Error resetting calculator state:', error);
            next(error);
        }
    }
);

export default resetCalculatorRouter;