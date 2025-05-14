# ObserveDatabaseRequest

## Example Usage

```typescript
import { ObserveDatabaseRequest } from "@solarwinds/swo-sdk-typescript/models/components";

let value: ObserveDatabaseRequest = {
  name: "<value>",
  agentId: "<id>",
  dbType: "pgsql",
  authMethod: "awsiam",
  configOptions: [
    {
      key: "<key>",
      value: "<value>",
    },
  ],
  dbConnOptions: {
    host: "caring-quit.net",
    port: "<value>",
    sslOptions: {},
  },
  tags: [
    {
      key: "<key>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Name for the observed database entity                                                                            |
| `agentId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Swo Agent ID wehre the plugins for observing database server should run                                          |
| `dbType`                                                                                                         | [components.DatabaseType](../../models/components/databasetype.md)                                               | :heavy_check_mark:                                                                                               | Database server type: mysql/mongo/mssql/pgsql/redis                                                              |
| `authMethod`                                                                                                     | [components.DatabaseAuthMethod](../../models/components/databaseauthmethod.md)                                   | :heavy_check_mark:                                                                                               | Auth method to be used by the agent to connect to database server                                                |
| `captureMethod`                                                                                                  | [components.CaptureMethod](../../models/components/capturemethod.md)                                             | :heavy_minus_sign:                                                                                               | Method for capturing metrics from database server: sniff/profiler/slow-log/poll, ignored for SqlServer and Redis |
| `configOptions`                                                                                                  | [components.CommonKeyValuePair](../../models/components/commonkeyvaluepair.md)[]                                 | :heavy_check_mark:                                                                                               | Optional advanced configuration options for plugins, e.g. disable-sampling                                       |
| `dbConnOptions`                                                                                                  | [components.DatabaseConnectionOptions](../../models/components/databaseconnectionoptions.md)                     | :heavy_check_mark:                                                                                               | Options specifying how plugins connect to database server                                                        |
| `tags`                                                                                                           | [components.CommonKeyValuePair](../../models/components/commonkeyvaluepair.md)[]                                 | :heavy_check_mark:                                                                                               | Tags for observed database entity                                                                                |