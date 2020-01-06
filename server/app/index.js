//Entry point for server JavaScript

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//LOGGING MIDDLEWARE
// allows us to easily log requests, errors, and more to the console. Helps with debugging.
app.use(morgan('dev'));

//STATIC MIDDLEWARE
//used to serve static files (i.e. javascript files, css files, and images) from public folder
app.use(express.static(path.join(__dirname, '../public')));

//PARSING MIDDLEWARE
//The body parser middleware is used to extract the body from the incoming requests and use it in req.body
//req.body is an object containing text parameters from the parsed request body.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('../apiRoutes')); // matches all requests to /api

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html')) //// Send index.html for any other requests
  });


// error handling middleware
  app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

//The 500 Internal Server Error is a very general HTTP status code that means something has gone wrong on the website's server

module.exports = app