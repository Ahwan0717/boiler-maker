const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/boilermaker', {
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});

module.exports = db;

//an instance of sequelize, which is what creates the connection to your database (this is why it's sometimes stored in a variable called 'db' - it represents your database). 
// You will also use this instance to do things like define your models. 