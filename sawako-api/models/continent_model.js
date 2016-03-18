'use strict';
const mongoose = require('mongoose');
const ContinentSchema = mongoose.Schema({
  country: String,
  gems:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gem'
  },
  region: String,
  mineral: String
});
let Continent = mongoose.model('Continent', ContinentSchema);
module.exports = Continent;
