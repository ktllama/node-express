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

campsiteRouter.route('/:campsiteId')
//calling all sepcific campsite resources
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send all the ${req.params.campsiteId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operations not supported on /campsites/id`);
})
.put((req, res) => {
    res.end(`Will update ${req.params.campsiteId} with ${req.body.name} ${req.body}`);
})
.delete((req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

//now we have a single statement that handles all the routing end points for campsites
//scalable organized way to handle the routing
module.exports = campsiteRouter;