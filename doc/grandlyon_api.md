# Grandlyon api description

Easy and simple grandlyon api documentation.

Sources : [https://rdata-grandlyon.readthedocs.org/fr/latest/index.html](https://rdata-grandlyon.readthedocs.org/fr/latest/index.html)

There are multiple services provided by grandlyon api.

**Endpoint** : `https://download.data.grandlyon.com`

## Rest service (json)

Basic API calls

```http
GET https://download.data.grandlyon.com/ws/{Service}/{TableName}/{Field}
.json?compact={boolean}&maxfeature={integer}&start={integer}
```

| Name       | Description                                                                                                                              |
|------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Service    | `grandlyon` or  ̀rdata`                                                                                                                   |
| TableName  | Dataset to use.                                                                                                                          |
| Field      | Value of the dataset.                                                                                                                    |
| compact    | **Default**: `True`.<br>**True**: List every value taken in the dataset.<br>**False**: List every record found in dataset with its value.|
| maxfeature | **Default**: `1000`.<br>Maximum number of field to fetch.                                                                                |
| start      | **Default**: `1`.<br>Indicate the index start.                                                                                           |


## WFS service

Basic API calls

```http
GET https://download.data.grandlyon.com/wfs/{Service}?service=wfs&request={Operations}&typename={TableName}&version
={Version}&outputformat={Format}
```

| Name       | Description                             |
|------------|-----------------------------------------|
| Service    | `grandlyon` or `rdata`                  |
| TableName  | Dataset to use.                         |
| Operations | `GetCapabilities` or `GetFeature`       |
| Format     | `GML` or `geojson`                      |
| Version    | `1.0.0` or ` 1.1.0` or `2.0`            |
