"use strict";

var Transport = require('./lib/transport'),
    extend    = require('extend'),
    Stations  = require('./lib/resources/velov/stations'),
    Status    = require('./lib/resources/velov/status');


class ApiLyon {
  constructor (options) {
    this.options        = options;

    this.transport      = new Transport(this.options);

    this.velov          = {};
    this.velov.stations = new Stations(this.transport);
    this.velov.status   = new Status(this.transport);
  }

  get options () {
    return this._options;
  }

  set options (options) {
    this._options = extend(true, {
      endpoint : 'https://download.data.grandlyon.com/ws/'
    }, options);
  }
}

module.exports = ApiLyon;
