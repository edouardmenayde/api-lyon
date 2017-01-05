'use strict';

import Resource from '../resource';

export default class Event extends Resource {

  constructor(transport) {
    super(transport);
    this.table      = 'pvo_patrimoine_voirie.pvoevenement';
    this.entryPoint = 'rdata';
  }

}
