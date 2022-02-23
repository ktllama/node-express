const express = require('express');
//shows we are using express- not a core module but installed in node_modules
const morgan = require('morgan');
//installed morgan

const hostname = 'localhost';
const port = 3000;


const app = express();
//express() is a function that returns an express server application that will now be available to us as the variable app

app.use(morgan('dev'));
//this will configure morgan to log using the development version which will print some additional info to the screen

//below will set up express to serve files from the public folder with help of middleware function called express.static()
app.use(express.static(__dirname + '/public'));
//__dirname is a special variable in node when ever used will refer to the absolute path of the current directory of the file that its in - so now express can serve static files from the public folder
//will now automatically serve file index.html if we send request to just host name- without express we had to set up manually

//below we will set up the server so it returns the same response for any request- use() method with a callback function thats a specail kind of middleware function express uses
//a middleware function in express has access to 3 params req- request object res- response object and next() which is a function (not used here)
app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});