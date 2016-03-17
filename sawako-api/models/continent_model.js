'use strict';
const mongoose = require('mongoose');
const ContinentSchema = new mongoose.Schema({
  country: String,
  region: String,
  mineral: String
});
let Continent = mongoose.model('Continent', ContinentSchema);
module.exports = Continent;
