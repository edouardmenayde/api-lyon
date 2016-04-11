"use strict";

class Stations {

  constructor (transport) {
    this.transport = transport;
    this.url= '/grandlyon/pvo_patrimoine_voirie.pvostationvelov/all.json';
  }

  get () {
    return this.transport.request(this.url);
  }

}

module.exports = Stations;
