

const logger = require('../utils/logger');
const handleInputServiceInstance = require('../services/handleInputService');

const handleInput = async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            logger.error('Invalid user input');
            return res.status(400).send({ message: 'Invalid user input' });
        }

        const userInput = req.body;
        const result = await handleInputServiceInstance.handleInput(userInput);
        logger.info('User input handled successfully');
        return res.status(200).send(result);
    } catch (error) {
        logger.error('Error handling user input', error);
        return res.status(500).send({ message: 'Error handling user input' });
    }
};

module.exports = { handleInput };