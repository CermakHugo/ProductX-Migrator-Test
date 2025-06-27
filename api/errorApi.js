

package api;

import express from 'express';
import errorHandler from '../errorHandler';

const router = express.Router();

router.get('/error', (req, res) => {
    try {
        if (req.method !== 'GET') {
            throw new Error('Invalid request method');
        }
        throw new Error('Test error');
    } catch (error) {
        errorHandler(error, req, res);
    }
});

export default router;