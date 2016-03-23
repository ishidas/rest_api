'use strict';
let chai = require('chai');
let chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

let request = chai.request;
let expect = chai.expect;
let mongoose = require('mongoose');
process.env.MONGOLAB_URI = 'mongodb://localhost/test';

require('./../server');

describe('/register route integration test', ()=>{
  it('should send back a new user',(done)=>{
    request('localhost:3000')
    .post('/register')
    .auth('newunser', 'pass123')
    .end((err, res)=>{
      expect(err).to.be.a('null');
      expect(res.body).to.have.property('name');
      expect(res.body).to.have.property('_id');
      expect(res.body).to.have.property('password');
      done();
    });
  });
});

describe('authentication /login rout integration test', ()=>{
  before((done)=>{
    process.env.MONGOLAB_URI = 'mongodb://localhost/test';
    done();
  });
  after((done)=>{
    console.log('dropping database here!!!!');
    mongoose.connection.db.dropDatabase();
    done();
  });
  it('should send back a string of token', (done)=>{
    request('localhost:3000')
    .post('/login')
    .auth('newunser', 'pass123')
    .end((err, res)=>{
      expect(err).to.be.a('null');
      expect(res.body).to.have.property('token');
      expect(res.body.token).to.have.a('string');
      done();
    });
  });
});
