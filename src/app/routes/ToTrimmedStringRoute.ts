

import express from 'express';
import ToTrimmedStringController from '../controllers/ToTrimmedStringController';

const router = express.Router();

router.post('/ToTrimmedString', async (req, res) => {
  try {
    const result = await ToTrimmedStringController.toTrimmedString(req.body);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

export default router;