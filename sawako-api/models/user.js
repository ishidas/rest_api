'use strict';
let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let userSchema = mongoose.Schema({
  name: String,
  password: String
});

userSchema.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  next();
});

userSchema.methods.compareHash = function (password){
  return bcrypt.compareSync(password, this.password);
};

let User = mongoose.model('User', userSchema);
module.exports = User;
