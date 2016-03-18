'use strict';
const mongoose = require('mongoose');
const GemsSchema = mongoose.Schema({
  name: String,
  color: String,
  density: Number,
  continent:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Continent'
  }
});

let Gem = mongoose.model('Gem', GemsSchema);
module.exports = Gem;
