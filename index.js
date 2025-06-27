

{
  "name": "calculator-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "engines": {
    "node": "14.17.0"
  }
}

const express = require('express');
const calculatorController = require('./calculator-controller');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/initializeUI', calculatorController.initializeUI);
app.get('/calculator', calculatorController.getCalculator);
app.post('/calculator', calculatorController.calculate);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});