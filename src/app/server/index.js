

const express = require('express');
const CalculatorRoute = require('../routes/CalculatorRoute');

const app = express();
app.use('/calculator', CalculatorRoute);
app.listen(3001, () => { console.log('Server started on port 3000'); });