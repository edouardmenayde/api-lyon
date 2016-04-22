"use strict";

import Resource from '../resource';

export default class Status extends Resource {

  constructor (transport) {
    super(transport);
    this.table      = 'jcd_jcdecaux.jcdvelov';
    this.entryPoint = 'rdata';
  }

}
