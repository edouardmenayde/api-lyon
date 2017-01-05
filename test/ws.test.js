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
        .then((response) => {
          expect(response).toEqual(ws.velovStations);
          done();
        })
        .catch(() => {
          done(new Error('Not getting 200'));
        });

    });

  });

  describe('velov.status.get()', function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.velov.status.get()
        .then((response) => {
          expect(response).toEqual(ws.velovStationsStatus);
          done();
        })
        .catch(() => {
          done(new Error('Not getting 200'));
        });

    });

  });

  describe('criter.camera.get()', function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.criter.camera.get()
        .then((response) => {
          expect(response).toEqual(ws.criterCamera);
          done();
        })
        .catch(() => {
          done(new Error('Not getting 200'));
        });

    });

  });

  describe('criter.section.get()', function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.criter.section.get()
        .then((response) => {
          expect(response).toEqual(ws.criterSection);
          done();
        })
        .catch(() => {
          done(new Error('Not getting 200'));
        });

    });

  });

  describe('criter.traffic.get()', function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.criter.traffic.get()
        .then((response) => {
          expect(response).toEqual(ws.criterTraffic);
          done();
        })
        .catch(() => {
          done(new Error('Not getting 200'));
        });

    });

  });

  describe('tcl.upcomingPassages.get()', function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.tcl.upcomingPassages.get()
        .then((response) => {
          expect(response).toEqual(ws.tclUpcomingPassage);
          done();
        })
        .catch(() => {
          done(new Error('Not getting 200'));
        });

    });

  });

  describe('tcl.stops.get()', function () {

    it('Should return 200', function (done) {
      const api = new ApiLyon({
        endpoint: 'http://localhost:9001'
      });

      return api.tcl.stops.get()
        .then((response) => {
          expect(response).toEqual(ws.tclStops);
          done();
        })
        .catch(() => {
          done(new Error('Not getting 200'));
        });

    });

  });

});
