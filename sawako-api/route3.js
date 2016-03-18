'use strict';
var express = require('express');
var whateverRouter = express.Router();
var bodyParser = require('body-parser');
var Gem = require('./models/gem_model');
var Continent = require('./models/continent_model');

whateverRouter.get('/whatever/:id', (req, res)=>{
  var query = {_id: req.params.id};
  Continent.findOne(query)
  .populate() 
});
