'use strict';

import Resource from '../resource';

export default class UpcomingPassages extends Resource {

  constructor(transport) {
    super(transport);
    this.table      = 'tcl_sytral.tclpassagearret';
    this.entryPoint = 'rdata';
  }

}
