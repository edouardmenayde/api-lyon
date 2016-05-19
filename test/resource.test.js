var assert   = require('assert'),
    expect   = require('expect'),
    ApiLyon  = require('../dist/index'),
    Resource = require('../dist/lib/resources/resource');


describe('Resource', function () {

  describe('.get(randomStuff) : Get using bad service name', function () {

    it('Should return error', function (done) {
      var api      = new ApiLyon();
      var resource = new Resource(api.transport);

      return resource.get('random')
        .then(function (response) {
            done(new Error("Should not resolve promise."));
          }
          , function (error) {
            expect(error).toBeA('object', 'Error response should be object');
            expect(error.error).toExist('Error should exist');
            done();
          });

    });

  });

  describe('.find(randomStuff) : Find using bad service name', function () {
    it('Should return error', function (done) {
      var api      = new ApiLyon();
      var resource = new Resource(api.transport);

      return resource.find('random')
        .then(function (response) {
            done(new Error("Should not resolve promise."));
          }
          , function (error) {
            expect(error).toBeA('object', 'Error response should be object');
            expect(error.error).toExist('Error should exist');
            done();
          });

    });
  });

});
