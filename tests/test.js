require('./setup.js');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

var expect = require('chai').expect;


describe('extension', function () {
  it('displays TEST on any page', function (done) {
    this.driver().get('http://www.google.com/ncr');

    this.driver().findElement(By.tagName('body')).getInnerHtml().then(function (d) {
      expect(d).to.contain('TEST');
      done();
    });
  });
});
