"use strict";

exports.__esModule = true;
exports.default = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transport = function () {
  function Transport(options) {
    _classCallCheck(this, Transport);

    this.options = options;
  }

  Transport.prototype.buildUrl = function buildUrl(path) {
    return this.options.endpoint.replace(/\/$/, '') + path.replace(/^\w/, '\/$&');
  };

  Transport.prototype.request = function request(path) {
    var options = {
      url: this.buildUrl(path),
      method: 'get'
    };

    return this.doRequest(options);
  };

  Transport.prototype.doRequest = function doRequest(options) {
    return new Promise(function (resolve, reject) {
      (0, _request2.default)(options, function (error, response, body) {
        if (error) {
          return reject({ error: error });
        }

        if (response.statusCode >= 400) {
          return reject(body);
        }

        return resolve(body);
      });
    });
  };

  return Transport;
}();

exports.default = Transport;
module.exports = exports['default'];