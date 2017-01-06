'use strict';

import Transport from './lib/transport';
import Stations from './lib/resources/velov/stations';
import Status from './lib/resources/velov/status';
import Camera from './lib/resources/criter/camera';
import Traffic from './lib/resources/criter/traffic';
import Section from './lib/resources/criter/section';
import Event from './lib/resources/criter/event';
import Stops from './lib/resources/tcl/stops';
import UpcomingPassages from './lib/resources/tcl/upcomingPassages';

import extend from 'extend';

export default class ApiLyon {

  /**
   * Instantiate Api.
   *
   * @param {{}} options
   */
  constructor(options) {
    this.options = options;

    this.transport = new Transport(this.options);

    this.velov = {
      stations: new Stations(this.transport),
      status  : new Status(this.transport)
    };

    this.criter = {
      camera : new Camera(this.transport),
      section: new Section(this.transport),
      traffic: new Traffic(this.transport),
      event  : new Event(this.transport)
    };

    this.tcl = {
      stops           : new Stops(this.transport),
      upcomingPassages: new UpcomingPassages(this.transport)
    }
  }

  /**
   * Getter for options.
   *
   * @returns {*}
   */
  get options() {
    return this._options;
  }

  /**
   * Setter for options.
   *
   * @param {{}} options
   */
  set options(options) {
    this._options = extend(true, {
      endpoint: 'https://download.data.grandlyon.com/',
      auth    : {
        login   : null,
        password: null
      }
    }, options);
  }

}
