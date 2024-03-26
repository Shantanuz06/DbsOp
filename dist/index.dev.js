"use strict";

var express = require("express");

var db = require('./models');

var _require = require('./models'),
    User = _require.User;

var app = express();
var PORT = process.env.PORT || 3001;
app.get('/', function (req, res) {
  res.send({
    message: "Welcome to the API"
  });
});
app.get('/select', function (req, res) {
  User.findAll().then(function (users) {
    res.send(users);
  })["catch"](function (err) {
    console.log(err);
  });
});
app.get('/insert', function (req, res) {
  User.create({
    firstName: "John",
    lastName: "Doe",
    age: "25",
    email: 'john@gmail.com'
  })["catch"](function (err) {
    if (err) {
      console.log(err);
    }
  });
  res.send('Inserting Data, Refresh Database');
});
db.sequelize.sync().then(function (req) {
  app.listen(PORT, function () {
    console.log('Server is running on port ', PORT);
  });
});