
const express = require('express');
const router = express.Router();

let currentCalculation = '';

router.post('/resetCalculation', (req, res) => {
    currentCalculation = '';
    res.status(200).send('');
});

module.exports = router;
