# DboUpdateDatabaseRequest

## Example Usage

```typescript
import { DboUpdateDatabaseRequest } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DboUpdateDatabaseRequest = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Name for the observed database entity                                                                          |
| `configOptions`                                                                                                | [components.CommonKeyValuePair](../../models/components/commonkeyvaluepair.md)[]                               | :heavy_minus_sign:                                                                                             | Optional advanced configuration options for plugins, e.g. disable-sampling set to true                         |
| `dbConnOptions`                                                                                                | [components.DboDatabaseConnectionOptionsUpdate](../../models/components/dbodatabaseconnectionoptionsupdate.md) | :heavy_minus_sign:                                                                                             | Options specifying how plugins connect to database server, authentication method change is not supported       |
| `tags`                                                                                                         | [components.CommonKeyValuePair](../../models/components/commonkeyvaluepair.md)[]                               | :heavy_minus_sign:                                                                                             | Tags for observed database entity                                                                              |
| `deployedOn`                                                                                                   | *string*[]                                                                                                     | :heavy_minus_sign:                                                                                             | Host entity/entities where database server is deployed on                                                      |