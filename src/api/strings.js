

```javascript
const express = require('express');
const router = express.Router();

router.post('/strings/trim', (req, res) => {
    const inputString = req.body.inputString;
    const trimmedString = inputString.trim();
    res.json({ trimmedString });
});

module.exports = router;
```