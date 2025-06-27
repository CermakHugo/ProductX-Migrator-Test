

```javascript
const express = require('express');
const router = express.Router();
const CalculatorController = require('../controllers/calculator.controller');

router.get('/display-field', async (req, res) => {
    try {
        const result = await CalculatorController.getDisplayField(req, res);
        res.status(200).json({
            "message": "OK",
            "status_code": 200,
            "data": result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            "message": "Internal Server Error",
            "status_code": 500,
            "data": null
        });
    }
});

module.exports = router;
```