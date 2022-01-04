// importing express and morgan and mongoose
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// importing contact router
const contactRouter = require('./Route/contactRouter');

const app = express();

// using morgan to app
app.use(morgan('dev'));

// setting template engine
app.set('view engine', 'ejs');

// using urllencoded middleware for using  form data
app.use(express.urlencoded({ extended: true }));

// using json middleware for using  json data
app.use(express.json());

// using contact router to app
app.use('/', contactRouter);

// universal get router
app.get('*', (req, res) => {
    res.send('<h1>Go to the current router</h1>');
    res.end();
});

// url for Connect to Cluster0
// hidding for security purpose

const url = '';

// connection MongoDB
mongoose
    .connect(url, { useNewUrlParser: true })
    .then(() => {
        const port = process.env.port || 8000;
        app.listen(port, () => {
            console.log(`Server Is Running on Port ${port}`);
        });
    })
    .catch((error) => {
        console.log(`Server Connection is Failed, Problem is ${error}`);
    });
