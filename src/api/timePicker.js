

```javascript
const express = require('express');
const router = express.Router();

let selectedTime;

router.get('/api/timePicker', (req, res) => {
    try {
        const { time } = req.query;
        if (!time) {
            throw new Error('Time is required');
        }
        const timeRegex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
        if (!timeRegex.test(time)) {
            throw new Error('Invalid time format. Please use HH:mm');
        }
        selectedTime = time;
        const calculationResult = calculateResult(selectedTime);
        res.json({ result: calculationResult });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

function calculateResult(time) {
    const [hours, minutes] = time.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    const result = totalMinutes * 2;
    return result;
}

module.exports = router;
```