# UpdateDatabaseRequest

## Example Usage

```typescript
import { UpdateDatabaseRequest } from "@solarwinds/swo-sdk-typescript/models/components";

let value: UpdateDatabaseRequest = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Name for the observed database entity                                                                    |
| `configOptions`                                                                                          | [components.CommonKeyValuePair](../../models/components/commonkeyvaluepair.md)[]                         | :heavy_minus_sign:                                                                                       | Optional advanced configuration options for plugins, e.g. disable-sampling                               |
| `dbConnOptions`                                                                                          | [components.DbConnOptions](../../models/components/dbconnoptions.md)                                     | :heavy_minus_sign:                                                                                       | Options specifying how plugins connect to database server, authentication method change is not supported |
| `tags`                                                                                                   | [components.CommonKeyValuePair](../../models/components/commonkeyvaluepair.md)[]                         | :heavy_minus_sign:                                                                                       | Tags for observed database entity                                                                        |