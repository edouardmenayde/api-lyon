const assert  = require('assert'),
      expect  = require('expect'),
      ApiLyon = require('../dist/index'),
      ws      = require('./mocks/fixtures/ws');

describe('Ws', function () {

  describe('velov.stations.get()', function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.velov.stations.get()
        .then(function (response) {
          expect(response).toEqual(ws.velovStations);
          done();
        })
        .catch(function (error) {
          done(error);
        });

    });

  });

  describe('velov.status.get()', function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.velov.status.get()
        .then(function (response) {
          expect(response).toEqual(ws.velovStationsStatus);
          done();
        })
        .catch(function (error) {
          done(error);
        });

    });

  });

  describe('criter.camera.get()', function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.criter.camera.get()
        .then(function (response) {
          expect(response).toEqual(ws.criterCamera);
          done();
        })
        .catch(function (error) {
          done(error);
        });

    });

  });

  describe('criter.section.get()', function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.criter.section.get()
        .then(function (response) {
          expect(response).toEqual(ws.criterSection);
          done();
        })
        .catch(function (error) {
          done(error);
        });

    });

  });

  describe('criter.traffic.get()', function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.criter.traffic.get()
        .then(function (response) {
          expect(response).toEqual(ws.criterTraffic);
          done();
        })
        .catch(function () {
          done(error);
        });

    });

  });

  describe('tcl.upcomingPassages.get()', function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.tcl.upcomingPassages.get()
        .then(function (response) {
          expect(response).toEqual(ws.tclUpcomingPassage);
          done();
        })
        .catch(function () {
          done(error);
        });

    });

  });

  describe('tcl.stops.get()', function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.tcl.stops.get()
        .then(function (response) {
          expect(response).toEqual(ws.tclStops);
          done();
        })
        .catch(function (error) {
          done(error);
        });

    });

  });

});
