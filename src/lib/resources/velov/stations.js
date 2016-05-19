'use strict';

import Resource from '../resource';

export default class Stations extends Resource {

  constructor (transport) {
    super(transport);
    this.table      = 'pvo_patrimoine_voirie.pvostationvelov';
    this.entryPoint = 'grandlyon';
  }

}
