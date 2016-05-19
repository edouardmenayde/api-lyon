var assert   = require('assert'),
    expect   = require('expect'),
    ApiLyon  = require('../dist/index'),
    Stations = require('../dist/lib/resources/velov/stations'),
    Status   = require('../dist/lib/resources/velov/status');


describe('Api', function () {

  it('Should instantiate all resources in default mode', function () {
    var api = new ApiLyon();

    assert(api.velov.stations instanceof Stations);
    assert(api.velov.status instanceof Status);
  });

});
