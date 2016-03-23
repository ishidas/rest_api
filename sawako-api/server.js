'use strict';
var express = require('express');
var app = express();
// var GemRouter = require('./gemRouter');
var Continent = require('./models/continent_model');
var bodyParser = require('body-parser');
let ContRouter = express.Router();
let mongoose = require('mongoose');
let User = require('./models/login');
let DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
mongoose.connect(DB_PORT);

app.use(bodyParser.json());
require('./routes/contRouter')(ContRouter,Continent,User);
// app.use(GemRouter);
app.use(ContRouter);

app.listen(3000, ()=>{
  console.log('Port 3000 is listening..');

});
