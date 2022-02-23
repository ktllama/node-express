const express = require('express');
//shows we are using express- not a core module but installed in node_modules
const morgan = require('morgan');
//installed morgan
const campsiteRouter = require('./routes/campsiteRouter');

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

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


//ORIGINAL SIMPLE ROUTES- MOVED TOP 5 TO CAMPSITE ROUTER AND CHAINED TOGETHER
//below is support for rest api endpoints
// app.all('/campsites', (req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
// });
// //takes path as first param- any http req to this path will trigger this method 
// //second param will be a callback function
// //next() function will pass control of the application routing to the next relevent routing method after this one, otherwise it would just stop here and not go any further

// //for the next routing method we will set up a get request to the path /campsites- will send campsites eventually- right now will show that access to this endpoint is working 
// app.get('/campsites', (req, res) => {
//     res.end('Will send all the campsites to you');
// });

// //requests will first go to app.all and then will skip down to whatever req was sent- so if it was post it would skip get and come here
// //post req typically carry some info in the body in json format (not always the case)
// //express.middlware function will take properties from that json data thats recieved and set up as properties of req.body js object
// //right now just echoing back the data below
// app.post('/campsites', (req, res) => {
//     res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
// });

// app.put('/campsites', (req, res) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /campsites');
// });

// //dangerous operation= dont want ordinary users to have access to it
// //with authentication we can restrict this operation to only privilaged users
// app.delete('/campsites', (req, res) => {
//     res.end('Deleting all campsites');
// });
//SET UP PARAM ROUTER
// //same end points but different path
// //allows us to store whatever the client sends as a part of the path after the / as a route parameter with name campsite id
// //just echoing back to make sure we can see requested campsite id correctly
// app.get('/campsites/:campsiteId', (req, res) => {
//     res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
// });

// app.post('/campsites/:campsiteId', (req, res) => {
//     res.statusCode = 403;
//     res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
// });

// //multi line response- res.write updates the body \n makes new line in body next part of message body in end
// //just echoing back what was sent to us
// app.put('/campsites/:campsiteId', (req, res) => {
//     res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
//     res.end(`Will update the campsite: ${req.body.name}
//         with description: ${req.body.description}`);
// });

// //used for deleting a specific campsite and not all of them
// app.delete('/campsites/:campsiteId', (req, res) => {
//     res.end(`Deleting campsite: ${req.params.campsiteId}`);
// });


// //below will set up express to serve files from the public folder with help of middleware function called express.static()
// app.use(express.static(__dirname + '/public'));
// //__dirname is a special variable in node when ever used will refer to the absolute path of the current directory of the file that its in - so now express can serve static files from the public folder
// //will now automatically serve file index.html if we send request to just host name- without express we had to set up manually

// //below we will set up the server so it returns the same response for any request- use() method with a callback function thats a specail kind of middleware function express uses
// //a middleware function in express has access to 3 params req- request object res- response object and next() which is a function (not used here)
