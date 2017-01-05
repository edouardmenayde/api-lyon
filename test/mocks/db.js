const ws = require('./fixtures/ws.json');

module.exports = {
  "ws-grandlyon-pvo_patrimoine_voirie.pvostationvelov-all.json": ws.velovStations,
  "ws-rdata-jcd_jcdecaux.jcdvelov-all.json": ws.velovStationsStatus,
  "ws-rdata-pvo_patrimoine_voirie.pvocameracriter-all.json": ws.criterCamera,
  "ws-grandlyon-pvo_patrimoine_voirie.pvotronconwebcriter-all.json": ws.criterSection,
  "ws-rdata-pvo_patrimoine_voirie.pvotrafic-all.json": ws.criterTraffic,
  "ws-rdata-tcl_sytral.tclpassagearret-all.json": ws.tclUpcomingPassage,
  "ws-rdata-tcl_sytral.tclarret-all.json": ws.tclStops
};
