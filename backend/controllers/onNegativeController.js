

const express = require('express');
const router = express.Router();

router.post('/onNegative', (req, res) => {
    try {
        const { value } = req.body;
        if (!value) {
            throw new Error('Input value is missing');
        }
        const result = calculateOnNegative(value);
        res.json({ result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

function calculateOnNegative(value) {
    // implement the necessary calculations to determine the result of the OnNegative action
    // for example:
    return -value;
}

module.exports = router;