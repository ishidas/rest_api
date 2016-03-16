'use strict';
var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

var request = chai.request;
var expect = chai.expect;
require(__dirname + '/../server.js');

describe('Testing to see if the routes are working', ()=>{
  it('should print stamp when I do get request on /gems',(done)=>{
    request('localhost:3000')
    .get('/gems')
    .end((err, res)=>{
      expect(err).to.be.null;
      expect(res).to.have.an('object');
      done();
    });
  });
});
