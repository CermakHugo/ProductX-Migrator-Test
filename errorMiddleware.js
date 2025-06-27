

package errorMiddleware.js

import errorHandler from './errorHandler.js';
import logger from './logger.js';

const errorMiddleware = (err, req, res, next) => {
    if (err instanceof Error) {
        if (typeof errorHandler.handleError === 'function') {
            errorHandler.handleError(err, res);
        } else {
            logger.error('Error handler is not defined or is not a function');
            res.status(500).send('Internal Server Error');
        }
    } else {
        logger.error('Error is not an instance of Error');
        res.status(500).send('Internal Server Error');
    }
    next();
};

export default errorMiddleware;