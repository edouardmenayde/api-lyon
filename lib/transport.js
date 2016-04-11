"use strict";

var request = require('request');

class Transport {

  constructor (options) {
    this.options = options;
  }

  buildUrl (path) {
    return this.options.endpoint.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
  }

  request (path) {
    var options = {
      url     : this.buildUrl(path),
      method  : 'get',
      json    : true
    };

    return this.doRequest(options);
  }

  doRequest (options) {
    return new Promise(function (resolve, reject) {
      request(options, function (error, response, body) {
        if (error) {
          return reject({error: error});
        }

        if (response.statusCode >= 400) {
          body.statusCode = response.statusCode;
          return reject(body);
        }

        return resolve(body);
      });
    });
  }

}

module.exports = Transport;
