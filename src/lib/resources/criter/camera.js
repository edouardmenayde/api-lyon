'use strict';

import Resource from '../resource';

export default class Camera extends Resource {

  constructor(transport) {
    super(transport);
    this.table      = 'pvo_patrimoine_voirie.pvocameracriter';
    this.entryPoint = 'rdata';
  }

}
