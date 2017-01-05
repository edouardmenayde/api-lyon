'use strict';

import Resource from '../resource';

export default class Stops extends Resource {

  constructor(transport) {
    super(transport);
    this.table      = 'tcl_sytral.tclarret';
    this.entryPoint = 'rdata';
  }

}
