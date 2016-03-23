// 'use strict';
// process.env.MONGOLAB_URI = 'mongodb://localhost/notes_test';
// require('./../server');
//
// var mongoose = require('mongoose');
// var chai = require('chai');
// var chaiHTTP = require('chai-http');
// chai.use(chaiHTTP);
//
// var request = chai.request;
// var expect = chai.expect;
//
// var Continent = require(__dirname + '/../models/continent_model');



// describe('Testing to see if the routes are working', ()=>{
//   before((done)=>{
//     var newGem = new Gem({name: 'Sapphire'});
//     newGem.save((err, gem)=>{
//       console.log('It\'s hitting post route' + gem);
//       done();
//     });
//   });
//   it('should take /gems as route',(done)=>{
//     request('localhost:3000')
//     .get('/gems')
//     .end((err, res)=>{
//       expect(err).to.eql(null);
//       expect(res.body).to.be.an('object');
//       done();
//     });
//   });
//
//   it('should take a /gems/:id route', (done)=>{
//     console.log('is this test hitting?');
//     request('localhost:3000')
//     .get('/gems/:id')
//     .end((err, res)=>{
//       expect(err).to.eql(null);
//       expect(res.body).to.have.an('array');
//       done();
//     });
//   });
// });
