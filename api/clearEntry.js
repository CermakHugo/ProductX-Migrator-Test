

const express = require('express');
const { clearEntry } = require('../services/clearEntry');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console()
  ]
});

const router = express.Router();
const bodyParser = express.json();

router.post('/clearEntry', bodyParser, async (req, res) => {
  try {
    const requestBody = req.body;
    if (!requestBody || Object.keys(requestBody).length === 0) {
      logger.error('Invalid request body');
      res.status(400).send({ message: 'Invalid request body' });
      return;
    }
    await clearEntry();
    logger.info('Entry cleared successfully');
    res.status(200).send({ message: 'Entry cleared successfully' });
  } catch (error) {
    logger.error('Error clearing entry:', error);
    res.status(500).send({ message: 'Error clearing entry' });
  }
});

module.exports = router;