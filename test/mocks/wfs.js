const wfs       = require('./fixtures/wfs');
const rdata     = new Map();
const grandlyon = new Map();

grandlyon.set(
  JSON.stringify({
    service     : 'wfs',
    request     : 'GetFeature',
    typename    : 'pvo_patrimoine_voirie.pvostationvelov',
    version     : '2.0.0',
    outputformat: 'geojson'
  }),
  wfs.velovStations
);

rdata.set(
  JSON.stringify({
    service     : 'wfs',
    request     : 'GetFeature',
    typename    : 'jcd_jcdecaux.jcdvelov',
    version     : '2.0.0',
    outputformat: 'geojson'
  }),
  wfs.velovStationStatus
);

rdata.set(
  JSON.stringify({
    service     : 'wfs',
    request     : 'GetFeature',
    typename    : 'pvo_patrimoine_voirie.pvocameracriter',
    version     : '2.0.0',
    outputformat: 'geojson'
  }),
  wfs.criterCamera
);

grandlyon.set(
  JSON.stringify({
    service     : 'wfs',
    request     : 'GetFeature',
    typename    : 'pvo_patrimoine_voirie.pvotronconwebcriter',
    version     : '2.0.0',
    outputformat: 'geojson'
  }),
  wfs.criterSection
);

rdata.set(
  JSON.stringify({
    service     : 'wfs',
    request     : 'GetFeature',
    typename    : 'pvo_patrimoine_voirie.pvotrafic',
    version     : '2.0.0',
    outputformat: 'geojson'
  }),
  wfs.criterTraffic
);

rdata.set(
  JSON.stringify({
    service     : 'wfs',
    request     : 'GetFeature',
    typename    : 'pvo_patrimoine_voirie.pvoevenement',
    version     : '2.0.0',
    outputformat: 'geojson'
  }),
  wfs.criterTrafficEvent
);

rdata.set(
  JSON.stringify({
    service     : 'wfs',
    request     : 'GetFeature',
    typename    : 'tcl_sytral.tclpassagearret',
    version     : '2.0.0',
    outputformat: 'geojson'
  }),
  wfs.tclUpcomingPassage
);

module.exports = {
  rdata    : rdata,
  grandlyon: grandlyon
};
