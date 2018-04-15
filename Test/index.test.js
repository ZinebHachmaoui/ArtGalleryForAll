var expect = require('chai').expect;
var request = require('request');
var app = require('../index.js');

let chai = require('chai');
let should = chai.should();
const winston = require('winston');
const logger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
        timestamp: function() {
            return (new Date()).toLocaleTimeString();
        },
        colorize: true
    })
  ]});

describe('hzineb',function(){
    it('should work',function(){
        expect(true).to.be.true;
        
    });
});

var assert = require('chai').assert;


 describe("Getting the page contact", function() {
    var url = "http://localhost:8080/contact";

    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });
    }); 
describe("Getting the page acceuil", function() {
    var url = "http://localhost:8070/contact";

    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });
    }); 
describe("Getting the page portrait a la demande", function() {
    var url = "http://localhost:8080/portrait-a-la-demande";

    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });
    }); 
describe("Getting the page nos-artistes", function() {
    var url = "http://localhost:8080/nos-artistes";

    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });
    });

describe("Testing 404: c'est une erreur", function() {
    var url = "http://localhost:8080/404";

    it("returns status 404", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(404);
      });
    });
    });
describe("testing logger", function() {

    it("logger value", function() {
        logger.level= 'silly'

     
        expect("silly").to.equal(logger.level);
    });
    }); 
