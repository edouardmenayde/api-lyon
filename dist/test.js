'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiLyon = new _index2.default();

apiLyon.velov.status.get('wfs').then(function (response) {
  console.log(response);
}).catch(function (error) {
  console.log(error);
});