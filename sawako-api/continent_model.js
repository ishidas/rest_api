'use strict';
const mongoose = require('mongoose');
const ContinentSchema = new mongoose.Schema({
  country: String,
  region: String,
  mineral: String
});

module.exports = mongoose.model('Continent', ContinentSchema);
