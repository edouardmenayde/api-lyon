export default class Resource {

  /**
   * Constructor of resource.
   *
   * @param transport
   */
  constructor (transport) {
    this.transport  = transport;
    this.table      = null;
    this.entryPoint = null;
    this.services   = {
      web : 'ws',
      wfs : 'wfs'
    };
  }

  /***
   * Find using wfs service.
   *
   * @param options
   * @returns {*}
   */
  findWfs (options = {}) {
    const suitableOptions = ['operation', 'version', 'format'];

    for (let option in options) {
      if (!options.hasOwnProperty(option)) {
        return Promise.reject({error: "Options given not valid."});
      }
      if (suitableOptions.indexOf(option) === -1) {
        return Promise.reject({error: "Options given not valid."});
      }
    }

    let url = this.services.wfs + '/' + this.entryPoint + '?service=wfs' +
      '&request=' + (options.operation ? options.operation : 'GetFeature') +
      '&typename=' + this.table +
      '&version=' + (options.version ? options.version : '2.0.0') +
      '&outputformat=' + (options.format ? options.format : 'geojson');

    return this.transport.request(url);
  }

  /***
   * Find use web service.
   *
   * @param options
   * @returns {*}
   */
  findWeb (options = {}) {
    const suitableOptions = ['compact', 'maxfeature', 'start'];

    var endUrl = (options.field ? options.field : 'all') + '.json';
    delete options.field;

    var index = 0;
    for (let option in options) {
      if (!options.hasOwnProperty(option)) {
        return Promise.reject({error: "Options given not valid."});
      }
      if (suitableOptions.indexOf(option) === -1) {
        return Promise.reject({error: "Options given not valid."});
      }
      endUrl += index ? '+' : '?' + `${option}=${options[option]}`;
      index += 1;
    }

    return this.transport.request(`${this.services.web}/${this.entryPoint}/${this.table}/${endUrl}`);
  }

  /**
   * Find use any service provided.
   *
   * @param options
   * @param service
   * @returns {*}
   */
  find (options, service = 'web') {
    if (!options) {
      return this.get(service);
    }
    switch (service) {
      case 'web':
        return this.findWeb(options);

      case 'wfs':
        return this.findWfs(options);

      default:
        return Promise.reject({error: "No service provided."});
    }
  }

  /**
   * Send a simple get request using any service.
   *
   * @param service
   * @returns {*}
   */
  get(service = 'web') {
    switch (service) {
      case 'web':
        return this.findWeb();

      case 'wfs':
        return this.findWfs();

      default:
        return Promise.reject({error: "No service provided."});
    }
  }

}
