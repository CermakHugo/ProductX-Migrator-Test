

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let lockedNumber;

function lockNumberValue(req, res) {
    try {
        if (!req.is('application/json')) {
            return res.status(400).json({ error: 'Invalid request, expected JSON' });
        }

        const inputNumber = req.body.number;

        if (typeof inputNumber !== 'number') {
            return res.status(400).json({ error: 'Invalid input number, expected a number' });
        }

        const regex = /^[0-9]+$/;

        if (!regex.test(inputNumber.toString())) {
            return res.status(400).json({ error: 'Invalid input number' });
        }

        lockedNumber = inputNumber;
        res.json({ lockedNumber });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = lockNumberValue;