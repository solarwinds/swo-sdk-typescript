## Typescript SDK Changes:
* `swo.entities.listEntities()`: 
  *  `request.type` **Changed**
  * `response.entities[]` **Changed** (Breaking ⚠️)
    - `healthState.state` **Changed** (Breaking ⚠️)
    - `healthscore` **Added**
* `swo.entities.getEntityById()`: `response` **Changed** (Breaking ⚠️)
    - `healthState.state` **Changed** (Breaking ⚠️)
    - `healthscore` **Added**
* `swo.dem.createUri()`: 
  *  `request.availabilityCheckSettings.testFrom` **Changed**
* `swo.dem.getUri()`:  `response.availabilityCheckSettings.testFrom` **Changed**
* `swo.dem.updateUri()`: 
  *  `request.dem.uri.availabilityCheckSettings.testFrom` **Changed**
* `swo.dem.createWebsite()`: 
  * `request.availabilityCheckSettings` **Changed**
    - `authentication` **Added**
    - `testFrom` **Changed**
* `swo.dem.getWebsite()`: `response.availabilityCheckSettings` **Changed**
    - `authentication` **Added**
    - `testFrom` **Changed**
* `swo.dem.updateWebsite()`: 
  * `request.dem.website.availabilityCheckSettings` **Changed**
    - `authentication` **Added**
    - `testFrom` **Changed**
* `swo.metrics.listMetrics()`:  `error.status[400]` **Added**
* `swo.metrics.listMetricAttributes()`:  `error.status[400]` **Added**
* `swo.metrics.listMetricAttributeValues()`:  `error.status[400]` **Added**
* `swo.metrics.listMetricMeasurements()`:  `error.status[400]` **Added**
