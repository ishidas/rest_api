'use strict';
let User = require('./../models/user');
let jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
  var decoded;
  console.log(req.headers);
  try{
    decoded = jwt.verify(req.headers.token, process.env.APP_SECRET || 'FLUFFBALL');
  } catch (err){
    return res.status(401).json({msg: 'authentication did not go thru'});
  }
  User.findOne({_id: decoded.id}, (err, user)=>{
    if(err){
      console.log('Could not find user : ' + err);
      return res.status(401).json({msg: 'authentication did not go thru'});
    }
    if(!user){
      return res.status(401).json({msg: 'authentication did not go thru'});
    }
    req.user = user;
    console.log(JSON.stringify(req.user));
    // next();
  });
};
