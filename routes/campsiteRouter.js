const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')
//all methods chained together bc they have same route 
//dont need path in each method bc its called above
//dont have ; at end of methods bc signals end of statment and we need to chain
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

//now we have a single statement that handles all the routing end points for campsites
//scalable organized way to handle the routing
module.exports = campsiteRouter;