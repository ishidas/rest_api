'use strict';
var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

var request = chai.request;
var expect = chai.expect;
require('./../server.js');


describe('Testing to see if the routes are working', ()=>{
  it('should take /gems as route',(done)=>{
    request('localhost:3000')
    .get('/gems')
    .end((err, res)=>{
      expect(err).to.eql(null);
      expect(res.body).to.be.an('object');
      // expect(res.body).to.have.property('_id');
      done();
    });
  });

  it('should take a /gems/:id route', (done)=>{
    console.log('is this test hitting?');
    var id = '56eb4be52fc98c994da22fa1';
    request('localhost:3000')
    .get('/gems/' + id)
    .end((err, res)=>{
      expect(err).to.eql(null);
      expect(res.body).to.have.an('array');
      // expect(res.body).to.have.property('_id');
      done();
    });
  });
});
