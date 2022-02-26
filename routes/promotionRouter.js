const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/')
//all methods chained together bc they have same route 
//dont need path in each method bc its called above
//dont have ; at end of methods bc signals end of statment and we need to chain
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotion to you');
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotion');
})
.delete((req, res) => {
    res.end('Deleting all promotion');
});

promotionRouter.route('/:promotionId')
//calling all sepcific promotion resources
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send all the ${req.params.promotionId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operations not supported on /promotion/id`);
})
.put((req, res) => {
    res.end(`Will update ${req.params.promotionId} with ${req.body.name} ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting promotion: ${req.params.promotionId}`);
});

//now we have a single statement that handles all the routing end points for promotion
//scalable organized way to handle the routing
module.exports = promotionRouter;