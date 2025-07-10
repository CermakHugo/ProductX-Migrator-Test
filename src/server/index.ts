

import express from 'express';
const app = express();
import CalculatorRoute from './routes/calculator';
app.use('/calculator', CalculatorRoute);
app.listen(3000, () => { console.log('Server started on port 3000'); });