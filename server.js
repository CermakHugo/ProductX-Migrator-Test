

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/calculator', require('./calculator'));
app.use('/maui', require('./maui'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});