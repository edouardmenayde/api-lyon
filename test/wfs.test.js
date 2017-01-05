const assert  = require('assert'),
      expect  = require('expect'),
      ApiLyon = require('../dist/index'),
      wfs      = require('./mocks/fixtures/wfs');

describe('Wfs', function () {

  describe("velov.stations.get('wfs')", function () {
    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.velov.stations.get('wfs')
        .then(function (response) {
          expect(response).toEqual(wfs.velovStations);
          done();
        })
        .catch(function () {
          done(new Error('Not getting 200'));
        });
    });
  });

  describe("velov.status.get('wfs')", function () {
    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.velov.status.get('wfs')
        .then(function (response) {
          expect(response).toEqual(wfs.velovStationStatus);
          done();
        })
        .catch(function () {
          done(new Error('Not getting 200'));
        });
    });
  });

  describe("criter.camera.get('wfs')", function () {
    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.criter.camera.get('wfs')
        .then(function (response) {
          expect(response).toEqual(wfs.criterCamera);
          done();
        })
        .catch(function () {
          done(new Error('Not getting 200'));
        });
    });
  });

  describe("criter.section.get('wfs')", function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.criter.section.get('wfs')
        .then(function (response) {
          expect(response).toEqual(wfs.criterSection);
          done();
        })
        .catch(function () {
          done(new Error('Not getting 200'));
        });

    });

  });

  describe("criter.traffic.get('wfs')", function () {
    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.criter.traffic.get('wfs')
        .then(function (response) {
          expect(response).toEqual(wfs.criterTraffic);
          done();
        })
        .catch(function () {
          done(new Error('Not getting 200'));
        });

    });
  });

  describe("criter.event.get('wfs')", function () {
    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.criter.event.get('wfs')
        .then(function (response) {
          expect(response).toEqual(wfs.criterTrafficEvent);
          done();
        })
        .catch(function () {
          done(new Error('Not getting 200'));
        });

    });
  });

  describe("tcl.upcomingPassages.get('wfs')", function () {
    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.tcl.upcomingPassages.get('wfs')
        .then(function (response) {
          expect(response).toEqual(wfs.tclUpcomingPassage);
          done();
        })
        .catch(function () {
          done(new Error('Not getting 200'));
        });

    });
  });



});
