

import express from 'express';
import calculator from './calculator';
import CalculatorService from './calculator.service';
import OperatorsController from './operators.controller';
import CalculatorController from './calculator.controller';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/app', CalculatorController.handleUserInput);

app.post('/app', CalculatorController.displayResults);

app.get('/operators', OperatorsController.getOperators);

app.post('/appendDigit', CalculatorController.appendDigit);

app.post('/appendOperator', CalculatorController.appendOperator);

app.get('/clearCalculation', CalculatorController.clearCalculation);

app.use('/calculator', CalculatorController.router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});