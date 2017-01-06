const assert           = require('assert'),
      expect           = require('expect'),
      ApiLyon          = require('../dist/index'),
      Stations         = require('../dist/lib/resources/velov/stations'),
      Status           = require('../dist/lib/resources/velov/status'),
      Camera           = require('../dist/lib/resources/criter/camera'),
      Traffic          = require('../dist/lib/resources/criter/traffic'),
      Section          = require('../dist/lib/resources/criter/section'),
      Event            = require('../dist/lib/resources/criter/event'),
      Stops            = require('../dist/lib/resources/tcl/stops'),
      UpcomingPassages = require('../dist/lib/resources/tcl/upcomingPassages');


describe('Api', function () {
  describe('new ApiLyon()', function () {
    it('Should instantiate all resources in default mode', function () {
      const api = new ApiLyon();

      assert(api.velov.stations instanceof Stations);
      assert(api.velov.status instanceof Status);

      assert(api.criter.camera instanceof Camera);
      assert(api.criter.section instanceof Section);
      assert(api.criter.traffic instanceof Traffic);
      assert(api.criter.event instanceof Event);

      assert(api.tcl.stops instanceof Stops);
      assert(api.tcl.upcomingPassages instanceof UpcomingPassages);
    });
  });
});
