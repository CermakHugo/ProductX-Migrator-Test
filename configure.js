

const express = require('express');
const app = express();

const middleware = (req, res, next) => {
    res.write('Hello, World!');
    res.end();
};

app.use(middleware);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});