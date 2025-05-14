# DbConnOptions

Options specifying how plugins connect to database server, authentication method change is not supported

## Example Usage

```typescript
import { DbConnOptions } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DbConnOptions = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `host`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Database server host                                                                                      |
| `port`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Database server port                                                                                      |
| `encryptedCredentials`                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Encrypted credentials for connecting to database server when using basic auth method (username, password) |
| `user`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Username for connecting to database server needed only for auth methods other than basic auth             |
| `sslEnabled`                                                                                              | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Enable ssl when agent connects to database server                                                         |
| `sslOptions`                                                                                              | [components.UpdateDatabaseRequestSslOptions](../../models/components/updatedatabaserequestssloptions.md)  | :heavy_minus_sign:                                                                                        | SSL connection options, when sslEnabled is true                                                           |
| `cloudRegion`                                                                                             | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Cloud region in case of database managed by cloud provider, required for IAM authentication               |