var assert  = require('assert'),
    ApiLyon = require('../dist/index'),
    Stations= require('../dist/lib/resources/velov/stations'),
    Status  = require('../dist/lib/resources/velov/status');

describe('ApiLyon', function () {

  it('should instanciate all resources', function () {
    var api = new ApiLyon();

    assert(api.velov.stations instanceof Stations);
    assert(api.velov.status instanceof Status);
  });

});
