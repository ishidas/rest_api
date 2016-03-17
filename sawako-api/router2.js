'use strict';
const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const app = express();
const ContinentRouter = express.Router();
const Continent = require('./continent_model.js');

// let DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
// mongoose.connect(DB_PORT);

ContinentRouter.use(Continent);
ContinentRouter.use(bodyParser.json());

ContinentRouter.get('/continents', (req, res)=>{
  Continent.find({}, (err, continent)=>{
    console.log('Here is /continent : ' + continent);
    res.json({id: continent});
    res.end();
  });
});

ContinentRouter.post('/continents', (req, res)=>{
  var newContinent = new Continent(req.body);
  newContinent.save((err, continent)=>{
    res.json(continent);
    res.end();
  });
});

module.exports = ContinentRouter;
