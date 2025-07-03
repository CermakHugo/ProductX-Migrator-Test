

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

function retrieveCalculatorUIState() {
    try {
        const data = require('./calculator-ui-state.json');
        return data;
    } catch (error) {
        console.error(error);
        return { error: 'Failed to retrieve calculator UI state' };
    }
}

app.get('/GetCalculatorUI', (req, res) => {
    try {
        const calculatorUIState = retrieveCalculatorUIState();
        res.json(calculatorUIState);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve calculator UI state' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
