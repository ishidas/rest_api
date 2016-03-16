'use strict';
var express = require('express');
var app = express();
var router = require('./router.js');

// var bodyParser = require('body-parser');

// app.use(bodyParser);
app.use(router);


app.listen(3000, ()=>{
  console.log('Port 3000 is listening..');

});
