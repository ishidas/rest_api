'use strict';
const mongoose = require('mongoose');
const GemsSchema = new mongoose.Schema({
  name: String,
  color: String,
  density: {min: Number, max: Number}
});

module.exports = mongoose.model('Gem', GemsSchema);
