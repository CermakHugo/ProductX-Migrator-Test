

package src.api;

import { stringsApi } from './strings.js';
import express from 'express';
import { navigationPageApi } from './navigationPage.js';

const router = express.Router();

router.use('/strings', stringsApi);
router.use('/navigationPage', navigationPageApi);

const timePickerApi = {
  getTimePicker: (req, res) => {
    const { startTime, endTime } = req.body;
    if (startTime && endTime) {
      const timePickerData = {
        startTime,
        endTime,
      };
      res.json(timePickerData);
    } else {
      res.status(400).send('Invalid request body');
    }
  },
  postTimePicker: (req, res) => {
    const { newStartTime, newEndTime } = req.body;
    if (newStartTime && newEndTime) {
      const timePickerData = {
        startTime: newStartTime, endTime: newEndTime;
      res.json(timePickerData);
    } else {
      res.status(400).send('Invalid request body');
    }
  },
};

router.use('/timePicker', timePickerApi);

export { router as api };