

package server;

import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use(express.Router());

app.get('/', (req, res) => {
    try {
        res.send('Hello World!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('connection error:', error);
    process.exit(1);
});

db.once('open', function () {
    console.log("Connected to MongoDB");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});