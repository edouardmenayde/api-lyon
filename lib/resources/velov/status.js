"use strict";

class Status {

  constructor (transport) {
    this.transport = transport;
    this.url = '/rdata/jcd_jcdecaux.jcdvelov/all.json';
  }

  get () {
    return this.transport.request(this.url);
  }
}

module.exports = Status;
