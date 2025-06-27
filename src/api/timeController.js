

package src.api;

import express, { Request, Response } from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import { TimeService } from '../services/timeService';

const timeController = express.Router();
const url = 'mongodb://localhost:27017';
const dbName = 'timeDB';
const client = new MongoClient(url);
const timeService = new TimeService(client, dbName);

timeController.put('/api/time/update', async (req: Request, res: Response) => {
    try {
        if (!req.body.time) {
            res.status(400).send({ error: 'Time is required' });
            return;
        }

        const currentTime = req.body.time;
        const updatedTime = await timeService.updateTime(currentTime);
        res.status(200).send({ time: updatedTime });
    } catch (err) {
        res.status(500).send({ error: 'Failed to update time' });
    }
});

export default timeController;