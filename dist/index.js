'use strict';

exports.__esModule = true;
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transport = require('./lib/transport');

var _transport2 = _interopRequireDefault(_transport);

var _stations = require('./lib/resources/velov/stations');

var _stations2 = _interopRequireDefault(_stations);

var _status = require('./lib/resources/velov/status');

var _status2 = _interopRequireDefault(_status);

var _camera = require('./lib/resources/criter/camera');

var _camera2 = _interopRequireDefault(_camera);

var _traffic = require('./lib/resources/criter/traffic');

var _traffic2 = _interopRequireDefault(_traffic);

var _section = require('./lib/resources/criter/section');

var _section2 = _interopRequireDefault(_section);

var _event = require('./lib/resources/criter/event');

var _event2 = _interopRequireDefault(_event);

var _stops = require('./lib/resources/tcl/stops');

var _stops2 = _interopRequireDefault(_stops);

var _upcomingPassages = require('./lib/resources/tcl/upcomingPassages');

var _upcomingPassages2 = _interopRequireDefault(_upcomingPassages);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiLyon = function () {
  function ApiLyon(options) {
    _classCallCheck(this, ApiLyon);

    this.options = options;

    this.transport = new _transport2.default(this.options);

    this.velov = {
      stations: new _stations2.default(this.transport),
      status: new _status2.default(this.transport)
    };

    this.criter = {
      camera: new _camera2.default(this.transport),
      section: new _section2.default(this.transport),
      traffic: new _traffic2.default(this.transport),
      event: new _event2.default(this.transport)
    };

    this.tcl = {
      stops: new _stops2.default(this.transport),
      upcomingPassages: new _upcomingPassages2.default(this.transport)
    };
  }

  _createClass(ApiLyon, [{
    key: 'options',
    get: function get() {
      return this._options;
    },
    set: function set(options) {
      this._options = (0, _extend2.default)(true, {
        endpoint: 'https://download.data.grandlyon.com/'
      }, options);
    }
  }]);

  return ApiLyon;
}();

exports.default = ApiLyon;
module.exports = exports['default'];