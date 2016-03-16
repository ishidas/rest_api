'use strict';
var express = require('express');
// var app = express();
var GemologyRouter = express.Router();


GemologyRouter.use((req, res, next)=>{
  console.log('Time : ' + new Date());
  next();
});

GemologyRouter.get('/gems', (req, res)=>{
  res.end();
});


GemologyRouter.post('/gems/:id', (req, res)=>{
  res.end();
});


GemologyRouter.put('/gems/:id', (req, res)=>{
  res.end();
});


GemologyRouter.delete('/gems/:id', (req, res)=>{
  res.end();
});

module.exports = GemologyRouter;
