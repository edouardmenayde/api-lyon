const assert    = require('assert'),
      expect    = require('expect'),
      ApiLyon   = require('../dist/index');

describe('Transport', function () {

  describe("new ApiLyon(login, password)", function () {
    it('Should auth', function (done) {

      const options = {
        endpoint: 'http://localhost:9001',
        auth    : {
          login   : 'test',
          password: 'yest'
        }
      };

      const api = new ApiLyon(options);

      api.transport.request('/auth')
        .then(function (response) {
          assert.equal(response, 'Basic ' + new Buffer(options.auth.login + ':' + options.auth.password).toString('base64'));
          done();
        })
        .catch(function (error) {
          done(error);
        });

    });
  });

  describe("new ApiLyon()", function () {
    it('Should auth', function (done) {

      const options = {
        endpoint: 'http://localhost:9001'
      };

      const api = new ApiLyon(options);

      api.transport.request('/auth')
        .then(function (response) {
          assert.equal(response, null);
          done();
        })
        .catch(function (error) {
          done(error);
        });

    });
  });

});
