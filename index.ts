

import express from 'express';
const app = express();
app.use(express.static('public'));
app.use('/', require('./app').default);
app.listen(3000, () => { console.log('Server started on port 3000'); });