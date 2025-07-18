

import express from 'express';
const app = express();
app.use(express.static('public'));
import { MainRoute } from './app/routes/MainRoute';
app.use('/', MainRoute);
app.listen(3000, () => { console.log('Server started on port 3000'); });