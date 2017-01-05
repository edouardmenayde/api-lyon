'use strict';

import Resource from '../resource';

export default class Section extends Resource {

  constructor(transport) {
    super(transport);
    this.table      = 'pvo_patrimoine_voirie.pvotronconwebcriter';
    this.entryPoint = 'grandlyon';
  }

}
