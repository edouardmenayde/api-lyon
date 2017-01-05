'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function () {
  function Resource(transport) {
    _classCallCheck(this, Resource);

    this.transport = transport;
    this.table = null;
    this.entryPoint = null;
    this.services = {
      web: 'ws',
      wfs: 'wfs'
    };
  }

  Resource.prototype.findWfs = function findWfs() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var suitableOptions = ['operation', 'version', 'format'];

    for (var option in options) {

      if (!options.hasOwnProperty(option)) {
        return Promise.reject({ error: "Options given not valid." });
      }

      if (suitableOptions.indexOf(option) === -1) {
        return Promise.reject({ error: "Options given not valid." });
      }
    }

    var url = this.services.wfs + '/' + this.entryPoint + '?service=wfs' + '&request=' + (options.operation ? options.operation : 'GetFeature') + '&typename=' + this.table + '&version=' + (options.version ? options.version : '2.0.0') + '&outputformat=' + (options.format ? options.format : 'geojson');

    return this.transport.request(url);
  };

  Resource.prototype.findWeb = function findWeb() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var suitableOptions = ['compact', 'maxfeature', 'start'];

    var endUrl = (options.field ? options.field : 'all') + '.json';
    delete options.field;

    var index = 0;

    for (var option in options) {

      if (!options.hasOwnProperty(option)) {
        return Promise.reject({ error: "Options given not valid." });
      }

      if (suitableOptions.indexOf(option) === -1) {
        return Promise.reject({ error: "Options given not valid." });
      }

      endUrl += index ? '+' : '?' + (option + '=' + options[option]);
      index += 1;
    }

    var url = this.services.web + '/' + this.entryPoint + '/' + this.table + '/' + endUrl;

    return this.transport.request(url);
  };

  Resource.prototype.find = function find(options) {
    var service = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'web';


    if (!options) {
      return this.get(service);
    }

    switch (service) {
      case 'web':
        return this.findWeb(options);

      case 'wfs':
        return this.findWfs(options);

      default:
        return Promise.reject({ error: "No service provided." });
    }
  };

  Resource.prototype.get = function get() {
    var service = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'web';

    switch (service) {
      case 'web':
        return this.findWeb();

      case 'wfs':
        return this.findWfs();

      default:
        return Promise.reject({ error: "No service provided." });
    }
  };

  return Resource;
}();

exports.default = Resource;
module.exports = exports['default'];