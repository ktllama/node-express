const express = require('express');
//shows we are using express- not a core module but installed in node_modules
const morgan = require('morgan');
//installed morgan
const campsiteRouter = require('./routes/campsiteRouter');
const promotionsRouter = require('./routes/promotionsRouter');

const hostname = 'localhost';
const port = 3000;


const app = express();
//express() is a function that returns an express server application that will now be available to us as the variable app

app.use(morgan('dev'));
//this will configure morgan to log using the development version which will print some additional info to the screen

app.use(express.json());
//this will take the data and parse it into javascript properties of the object so we can use the data

//provide root path for campsiteRouter here which is why we dont need to specify in campsiteRouter.js
app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionsRouter);

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});