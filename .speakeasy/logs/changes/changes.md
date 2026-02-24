## Typescript SDK Changes:
* `swo.dem.deleteTransaction()`: `response` **Changed** (Breaking ⚠️)
    - `status[200]` **Removed** (Breaking ⚠️)
    - `status[204]` **Added** (Breaking ⚠️)
* `swo.dbo.unobserveDatabase()`: **Added**
* `swo.dem.getUriOutageStatuses()`: **Added**
* `swo.dem.getUriTestResults()`: **Added**
* `swo.dem.getWebsiteOutageStatuses()`: **Added**
* `swo.dem.getWebsiteTestResults()`: **Added**
* `swo.entities.listEntities()`:  `response.entities[].healthState` **Added**
* `swo.entities.getEntityById()`:  `response.healthState` **Added**
