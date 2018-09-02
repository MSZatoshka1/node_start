const express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
module.exports = app;

