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