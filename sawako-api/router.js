'use strict';
var express = require('express');
var GemologyRouter = express.Router();
var bodyParser = require('body-parser');
var Gem = require('./models/gem_model');


GemologyRouter.use(bodyParser.json());

GemologyRouter.use((err, req, res, next)=>{
  console.error(err.stack);
  res.status(500).send('Somthing broke');
  next();
});

GemologyRouter.use((req, res, next)=>{
  console.log('Time : ' + new Date());
  next();
});

GemologyRouter.get('/gems', (req, res)=>{
  Gem.find({}, (err,gem)=>{
    if(err){
      console.log(err);
    }
    console.log('Here is gem in get : ' + gem);
    res.json({data: gem});
    res.end();
  });
});

GemologyRouter.get('/gems/:id', (req, res)=>{
  // console.log('ID : ' + req.params.id);
  Gem.find({'_id': req.params.id}, (err, gem)=>{
    res.json(gem);
    // console.log(gem._id);
    res.end();
  });
});

//**************************
//querying density Number
//**************************
GemologyRouter.get('/density/', (req, res)=>{
  var num = JSON.parse(req.query.density);
  console.log(num);
  Gem.find({'density': {$lte: num }}, (err, gem)=>{
    res.json(gem);
    res.end();
  });
});

GemologyRouter.post('/gems', (req, res)=>{
  console.log('This is req.body : ' + req.body);
  var newGem = new Gem(req.body);
  newGem.save((err, gem)=>{
    console.log('It\'s hitting post route' + gem);
    res.json(gem);
    res.end();
  });
});


GemologyRouter.put('/gems/:id', (req, res)=>{
  var query = {_id: req.params.id };
  Gem.update(query, req.body, (err, gem)=>{
    res.json({_id: gem});
    res.end();
  });
});


GemologyRouter.delete('/gems/:id', (req, res)=>{
  var query = {_id: req.params.id };
  Gem.remove(query, ()=>{
    console.log('id : ' + req.params.id + ' is removed.');
    res.end();
  });
});

module.exports = GemologyRouter;
