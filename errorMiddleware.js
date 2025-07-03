const errorHandler = require('./errorHandler');

const errorMiddleware = (err, req, res, next) => {
    if (err instanceof Error) {
        if (typeof errorHandler.handleError === 'function') {
            errorHandler.handleError(err, res);
        } else {
            console.error('Error handler is not defined or is not a function');
            res.status(500).send('Internal Server Error');
        }
    } else {
        console.error('Error is not an instance of Error');
        res.status(500).send('Internal Server Error');
    }
    next();
};

export default errorMiddleware;