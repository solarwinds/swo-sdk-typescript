## Typescript SDK Changes:
* `swo.entities.updateEntityById()`: `response` **Changed** (Breaking ⚠️)
    - `status[200]` **Added** (Breaking ⚠️)
    - `status[202]` **Removed** (Breaking ⚠️)
* `swo.metrics.listMetricMeasurements()`:  `response.groupings[].measurements[].value` **Changed** (Breaking ⚠️)
* `swo.metrics.listMultiMetricMeasurements()`:  `response.metrics[].groupings[].measurements[].value` **Changed** (Breaking ⚠️)
* `swo.dbo.getPublicKey()`: `error` **Changed** (Breaking ⚠️)
    - `status[400]` **Removed** (Breaking ⚠️)
    - `status[404]` **Removed** (Breaking ⚠️)
* `swo.dbo.getPluginConfig()`:  `error.status[403]` **Added**
* `swo.dbo.updateDatabase()`:  `error.status[403]` **Added**
* `swo.dbo.observeDatabase()`:  `error.status[403]` **Added**
* `swo.dbo.getPlugins()`:  `error.status[403]` **Added**
* `swo.dbo.pluginOperation()`:  `error.status[403]` **Added**
* `swo.dbo.unobserveDatabase()`:  `error.status[403]` **Added**
* `swo.dbo.deleteDatabase()`:  `error.status[403]` **Added**
* `swo.dbo.setConfig()`:  `error.status[403]` **Added**
* `swo.dbo.getConfig()`:  `error.status[403]` **Added**
