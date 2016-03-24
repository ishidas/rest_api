'use strict';
let chai = require('chai');
let chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

let request = chai.request;
let expect = chai.expect;
let mongoose = require('mongoose');
process.env.MONGOLAB_URI = 'mongodb://localhost/test';
let Continent = require('./../models/continent_model');
require('./../server');
var token = '';

describe('/register route integration test', function (){

  it('should send back a new user',function (done){
    request('localhost:3000')
    .post('/register')
    .auth('newunser', 'pass123')
    .end(function(err, res){
      expect(err).to.be.a('null');
      expect(res.body).to.have.property('name');
      expect(res.body).to.have.property('_id');
      expect(res.body).to.have.property('password');
      done();
    });
  });
});

describe('authentication /login rout integration test', function (){

  it('should send back a string of token', function(done){
    request('localhost:3000')
    .post('/login')
    .auth('newunser', 'pass123')
    .end(function(err, res){
      token = res.body.token;
      console.log('TOKEN TOKEN : ' + token);
      expect(err).to.be.a('null');
      expect(res.body).to.have.property('token');
      expect(res.body.token).to.have.a('string');
      done();
    });
  });
});

describe('routes should pass auth middleware and autherize it via rsc routes', function(){
  var id;

  before((done)=>{
    var newContinent = new Continent({country: 'Japan', region: 'Osaka'});
    newContinent.save((err, gem)=>{
      if(err){
        return console.log('Here is test post error : ' + err);
      }
      id = gem._id;
      console.log('newContinent : ' + gem);
      done();
    });
  });
  after(function(done){
    console.log('dropping database here!!!!');
    mongoose.connection.db.dropDatabase();
    done();
  });
  it('should get 401 status back if decoded a token that is not part of this db', function(done){
    request('localhost:3000')
    .get('/continents')
    .set({'token': 'djfhakljfhkajdfhakejg'})
    .end((err, res)=>{
      expect(err).to.have.status(401);
      expect(res).to.be.an('object');
      done();
    });
  });
  it('should get all continents data when GET /continents is hit', function(done){
    request('localhost:3000')
    .get('/continents')
    .send({token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NmYzNzg1NzIyYThhYzM2MDkyNWM5MmYiLCJpYXQiOjE0NTg3OTY2NTB9.Y5lMys0SG5TrXirWivD7ALLWDf3R_VnTwfo5UV-f4-I'})
    .end((err, res)=>{
      it('should get 401 status back if decoded a token that is not part of this db', function(done){
        request('localhost:3000')
        .get('/continents')
        .set({'token': token})
        .end((err, res)=>{
          expect(err).to.be.null;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('i');
          done();
        });
      });
      expect(res).to.be.an('object');
      done();
    });
  });
  it('should grab only one data that is being specified by end point', function(done){
    request('localhost:3000')
    .get('/continents/' + id)
    .set({'token': token})
    .end((err, res)=>{
      debugger;
      expect(res).to.be.an('object');
      expect(res.body).to.have.property('id');

      done();
    });
  });
});
