// var ApiLyon = require("../dist/index");

import ApiLyon from './index';

// console.log(ApiLyon.default)

var apiLyon = new ApiLyon();

apiLyon.velov.status.get('wfs')
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  });

// apiLyon.velov.status.get('wfs')
//   .then(response => {
//     // console.log(response)
//   })
//   .catch(error => {
//     console.log(`velov/status?wfs${error}`)
//   });
//
// apiLyon.velov.status.get('web')
//   .then(response => {
//   })
//   .catch(error => {
//     console.log(error)
//   });
//
// apiLyon.velov.stations.get('wfs')
//   .then(response => {
//   })
//   .catch(error => {
//     console.log(`velov/stations?wfs${error}`)
//   });
//
// apiLyon.velov.stations.get('web')
//   .then(response => {
//   })
//   .catch(error => {
//     console.log(`velov/stations?web${error}`)
//   });
