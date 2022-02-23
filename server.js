const express = require('express');
//shows we are using express- not a core module but installed in node_modules

const hostname = 'localhost';
const port = 3000;

const app = express();
//express() is a function that returns an express server application that will now be available to us as the variable app

//below we will set up the server so it returns the same response for any request- use() method with a callback function thats a specail kind of middleware function express uses
//a middleware function in express has access to 3 params req- request object res- response object and next() which is a function (not used here)
app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});