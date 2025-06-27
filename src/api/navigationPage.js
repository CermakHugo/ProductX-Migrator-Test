

package src.api.navigationPage.js

import express from 'express';
import math from 'mathjs';

const router = express.Router();

router.post('/navigationPage', (req, res) => {
  try {
    const userInput = req.body;
    if (!userInput || !userInput.expression) {
      res.status(400).json({ error: 'Invalid user input' });
      return;
    }
    const result = math.evaluate(userInput.expression);
    res.json({ result });
  } catch (error) {
    if (error instanceof math.error.DivisionByZeroError) {
      res.status(400).json({ error: 'Division by zero is not allowed' });
    } else if (error instanceof math.error.SyntaxError) {
      res.status(400).json({ error: 'Invalid mathematical expression' });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

export default router;