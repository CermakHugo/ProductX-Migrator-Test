

package.json

const express = require('express');
const moment = require('moment');

const app = express();

app.get('/getTime', (req, res) => {
    try {
        const currentTime = moment().format('HH:mm:ss');
        res.json({ time: currentTime });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});