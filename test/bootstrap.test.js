const startServer = require('./server');

before(function (done) {
  startServer();
  done();
});

after(function (done) {
  done();
});
