# DatabaseConnectionOptions

## Example Usage

```typescript
import { DatabaseConnectionOptions } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DatabaseConnectionOptions = {
  host: "ornery-plain.com",
  port: "<value>",
  sslOptions: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `host`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Database server host                                                                                             |
| `port`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Database server port                                                                                             |
| `encryptedCredentials`                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Encrypted credentials for connecting to database server when using basic auth method (username, password)        |
| `user`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Username for connecting to database server needed only for auth methods other than basic auth                    |
| `sslEnabled`                                                                                                     | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Enable ssl when agent connects to database server                                                                |
| `sslOptions`                                                                                                     | [components.DatabaseConnectionOptionsSslOptions](../../models/components/databaseconnectionoptionsssloptions.md) | :heavy_check_mark:                                                                                               | SSL connection options, when sslEnabled is true                                                                  |
| `cloudRegion`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Cloud region in case of database managed by cloud provider, required for IAM authentication                      |