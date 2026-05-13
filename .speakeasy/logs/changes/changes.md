## Typescript SDK Changes:
* `swo.dem.getTransaction()`:  `response.testDefinition.commands[].command.enum(clickAt)` **Added** (Breaking ⚠️)
* `swo.entities.listEntities()`:  `response.entities[].healthscore` **Removed** (Breaking ⚠️)
* `swo.entities.getEntityById()`:  `response.healthscore` **Removed** (Breaking ⚠️)
* `swo.metrics.listMetricMeasurements()`: 
  *  `request.bucketSizeInSeconds` **Removed** (Breaking ⚠️)
* `swo.cloudAccounts.validateMgmtAccountOnboarding()`: **Removed** (Breaking ⚠️)
* `swo.dem.createTransaction()`: 
  *  `request.testDefinition.commands[].command.enum(clickAt)` **Added**
* `swo.dem.updateTransaction()`: 
  *  `request.dem.transaction.testDefinition.commands[].command.enum(clickAt)` **Added**
