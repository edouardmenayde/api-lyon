const Server      = require('json-server');
const server      = Server.create();
const db          = require('./mocks/db');
const router      = Server.router(db);
const middlewares = Server.defaults({logger: false});
const routes      = require('./mocks/routes.json');
const wfs         = require('./mocks/wfs');

module.exports = function () {
  server.use(Server.rewriter(routes));
  server.use(middlewares);

  server.get('/wfs/grandlyon', function (req, res) {
    const stringified = JSON.stringify(req.query);
    if (wfs.grandlyon.has(stringified)) {
      return res.json(wfs.grandlyon.get(stringified));
    }
    res.json({});
  });
  server.get('/wfs/rdata', function (req, res) {
    const stringified = JSON.stringify(req.query);
    if (wfs.rdata.has(stringified)) {
      return res.json(wfs.rdata.get(stringified));
    }
    res.json({});
  });

  server.get('/auth', function (req, res) {
    res.json(req.headers.authorization);
  });

  server.use(router);
  server.listen(9001);
};
