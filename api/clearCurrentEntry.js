

const express = require('express');
const router = express.Router();

router.post('/clearCurrentEntry', (req, res) => {
    const currentEntry = req.body.currentEntry || req.query.currentEntry;
    if (!currentEntry) {
        res.status(400).send({ message: 'Current entry is required' });
        return;
    }
    req.session.currentEntry = null;
    res.status(200).send({ message: 'Current entry cleared successfully' });
});

module.exports = router;