'use strict';

exports.__esModule = true;
exports.default = undefined;

var _resource = require('../resource');

var _resource2 = _interopRequireDefault(_resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Event = function (_Resource) {
  _inherits(Event, _Resource);

  function Event(transport) {
    _classCallCheck(this, Event);

    var _this = _possibleConstructorReturn(this, _Resource.call(this, transport));

    _this.table = 'pvo_patrimoine_voirie.pvoevenement';
    _this.entryPoint = 'rdata';
    return _this;
  }

  return Event;
}(_resource2.default);

exports.default = Event;
module.exports = exports['default'];