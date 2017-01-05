'use strict';

import request from 'request';

export default class Transport {

  /**
   * Transport constructor.
   *
   * @param options
   */
  constructor (options) {
    this.options = options;
  }

  /**
   * Build the url.
   *
   * @param path
   * @returns {string}
   */
  buildUrl (path) {
    return this.options.endpoint.replace(/\/$/, '') + path.replace(/^\w/, '\/$&');
  }

  /**
   * Request method.
   *
   * @param path
   * @returns {*}
   */
  request (path) {
    const options = {
      url   : this.buildUrl(path),
      method: 'get'
    };

    return this.doRequest(options);
  }

  /**
   * Execute request.
   *
   * @param {{}} options
   * @returns {Promise}
   */
  doRequest (options) {
    return new Promise(function (resolve, reject) {
      request(options, (error, response, body) => {
        if (error) {
          return reject({error: error});
        }

        var workableBody = {
          body: body
        };

        if (/^application\/json/.test(response.headers['content-type'])) {
          workableBody = JSON.parse(body);
        }

        if (response.statusCode >= 400) {
          workableBody.statusCode = response.statusCode;

          return reject(workableBody);
        }

        return resolve(workableBody);
      });
    });
  }

}
