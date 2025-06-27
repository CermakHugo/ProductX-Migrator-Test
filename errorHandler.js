

package errorHandler;

import express from 'express';
import logger from '../logger';

const handleError = (err, req, res, next) => {
    if (err) {
        if (logger) {
            logger.error(err);
        } else {
            console.error(err);
        }
        if (req && res) {
            res.status(500).json({ message: 'Internal Server Error', error: err.message });
        } else {
            console.error('Invalid request or response object');
        }
    } else {
        console.error('Error object is null or undefined');
    }
}

export default handleError;