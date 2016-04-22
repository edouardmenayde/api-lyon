"use strict";

exports.__esModule = true;
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transport = require('./lib/transport');

var _transport2 = _interopRequireDefault(_transport);

var _stations = require('./lib/resources/velov/stations');

var _stations2 = _interopRequireDefault(_stations);

var _status = require('./lib/resources/velov/status');

var _status2 = _interopRequireDefault(_status);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiLyon = function () {
  function ApiLyon(options) {
    _classCallCheck(this, ApiLyon);

    this.options = options;

    this.transport = new _transport2.default(this.options);

    this.velov = {};
    this.velov.stations = new _stations2.default(this.transport);
    this.velov.status = new _status2.default(this.transport);
  }

  _createClass(ApiLyon, [{
    key: 'options',
    get: function get() {
      return this._options;
    },
    set: function set(options) {
      this._options = (0, _extend2.default)(true, {
        endpoint: 'https://download.data.grandlyon.com/',
        service: 'ws'
      }, options);
    }
  }]);

  return ApiLyon;
}();

exports.default = ApiLyon;
module.exports = exports['default'];