# DboDatabaseSslOptions

## Example Usage

```typescript
import { DboDatabaseSslOptions } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DboDatabaseSslOptions = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `sslMode`                                                                                          | [components.DboDatabaseSslOptionsSslMode](../../models/components/dbodatabasessloptionssslmode.md) | :heavy_minus_sign:                                                                                 | SSL mode such as require, verify-ca, verify-full as applicable                                     |
| `sslCAPath`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | CA file path                                                                                       |
| `sslKeyPath`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | SSL key file path                                                                                  |
| `sslCertPath`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | SSL cert file path                                                                                 |