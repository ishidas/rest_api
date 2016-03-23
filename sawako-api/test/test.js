'use strict';
process.env.MONGOLAB_URI = 'mongodb://localhost/notes_test';
require('./../server');

var mongoose = require('mongoose');
var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

var request = chai.request;
var expect = chai.expect;

var Gem = require(__dirname + '/../models/gem_model');


describe('Testing to see if the routes are working', ()=>{
  var id;
  beforeEach((done)=>{
    var newGem = new Gem({name: 'Sapphire'});
    newGem.save((err, gem)=>{
      console.log('It\'s hitting post route' + gem);
      id = gem._id;
      done();
    });
  });
  after((done)=>{
    mongoose.connection.db.dropDatabase(()=>{
      done();
    });
  });

  it('should take /gems as route',(done)=>{
    request('localhost:3000')
    .get('/gems')
    .end((err, res)=>{
      expect(err).to.eql(null);
      expect(res.body).to.be.an('object');
      done();
    });
  });

  it('should take a /gems/:id route', (done)=>{
    console.log('is this test hitting?');
    request('localhost:3000')
    .get('/gems/' + id)
    .end((err, res)=>{
      expect(err).to.eql(null);
      expect(res.body).to.have.an('object');
      done();
    });
  });
});
