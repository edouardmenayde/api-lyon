'use strict';

import Resource from '../resource';

export default class Traffic extends Resource {

  constructor(transport) {
    super(transport);
    this.table      = 'pvo_patrimoine_voirie.pvotrafic';
    this.entryPoint = 'rdata';
  }

}
