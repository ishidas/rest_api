'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var ContinentRouter = express.Router();
var Continent = require('./models/continent_model');


ContinentRouter.use(bodyParser.json());

ContinentRouter.get('/continents', (req, res)=>{
  Continent.find({}, (err, continent)=>{
    console.log('Here is /continent : ' + continent);
    res.json({id: continent});
    res.end();
  });
});

ContinentRouter.get('/continents/:id', (req, res)=>{
  var query = {_id: req.params.id};
  Continent.find(query, (err, continent)=>{
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

ContinentRouter.put('/continents/:id', (req, res)=>{
  var query = { _id: req.params.id};
  Continent.update(query, req.body, (err, continent)=>{
    res.json({_id: continent});
    res.end();
  });
});

ContinentRouter.delete('/continents/:id', (req, res)=>{
  var query = {_id: req.params.id};
  Continent.remove(query, (err)=>{
    console.log('This is hit : ' + err);
    res.end();
  });
});

module.exports = ContinentRouter;
