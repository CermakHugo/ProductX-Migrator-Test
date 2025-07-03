

import express from 'express';
import { calculate } from './calculator';

const app = express();
app.use(express.json());

app.get('/calculate', (req, res) => {
    try {
        const calculation = req.query.calculation;
        if (!calculation) {
            res.status(400).json({ error: 'Calculation query parameter is required' });
            return;
        }

        const result = calculate(calculation);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: 'Error during calculation' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});