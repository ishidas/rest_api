'use strict';
var express = require('express');
var app = express();
var Gem = require('./models/gem_model');
var Continent = require('./models/continent_model');
var bodyParser = require('body-parser');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('./models/user');
let auth = require('./routes/authorization');

let DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
mongoose.connect(DB_PORT);

app.use(bodyParser.json());
app.use(router);

require('./routes/contRouter')(router,Continent,User,auth);
require('./routes/gemRouter')(router,Gem ,User ,auth);
require('./routes/register')(router, User);
require('./routes/login')(router, User);
// app.use(GemRouter);

app.listen(3000, ()=>{
  console.log('Port 3000 is listening..');

});
