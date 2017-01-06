# Api-Lyon

## Getting started

```bash

yarn add api-lyon

```

### Node

```javascript

const ApiLyon = require('api-lyon');
const api = new ApiLyon();

api.velov.stations.get()
    .then(response => {
      console.info(response);
    })
    .catch(error => {
      console.error(error);
    });

```

### Typescript

```typescript

import * as ApiLyon from 'api-lyon';
const api = new ApiLyon();

api.velov.status.get('wfs')
  .then(response => {
    console.info(response);
  })
  .catch(error => {
    console.error(error);
  });

```
