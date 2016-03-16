'use strict';
var express = require('express');
// var app = express();
var GemologyRouter = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Gem = require('./models/gem_model');

let DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
mongoose.connect(DB_PORT);

GemologyRouter.use(bodyParser.json());

GemologyRouter.use((req, res, next)=>{
  console.log('Time : ' + new Date());
  next();
});

GemologyRouter.get('/gems', (req, res)=>{

  res.end();
});


GemologyRouter.post('/gems', (req, res)=>{
  console.log('This is req.body : ' + req.body);
  var newGem = new Gem(req.body);
  console.log('This is a newGem : ' + newGem);
  newGem.save((err, gem)=>{
    console.log('It\'s hitting post route' + gem);
    console.log(err);
    res.json(gem);
    res.end();
  });
});


GemologyRouter.put('/gems/:id', (req, res)=>{
  res.end();
});


GemologyRouter.delete('/gems/:id', (req, res)=>{
  res.end();
});

module.exports = GemologyRouter;
