'use strict';
var express = require('express');
var app = express();
var GemologyRouter = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Gem = require( __dirname + '/models/gem_model.js');

let DB_PORT = process.env.MONGOLAB_URI || 'mongodb:localhost/db';
mongoose.connect(DB_PORT);

app.use(bodyParser);

GemologyRouter.use((req, res, next)=>{
  console.log('Time : ' + new Date());
  next();
});

GemologyRouter.get('/gems', (req, res)=>{

  res.end();
});


GemologyRouter.post('/gems/:id', (req, res)=>{
  var newGem = new Gem(req.body);
  newGem.save((err, gem)=>{
    res.json(gem);
  });
  res.end();
});


GemologyRouter.put('/gems/:id', (req, res)=>{
  res.end();
});


GemologyRouter.delete('/gems/:id', (req, res)=>{
  res.end();
});

module.exports = GemologyRouter;
