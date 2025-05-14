# DatabaseConnectionOptionsSslOptions

SSL connection options, when sslEnabled is true

## Example Usage

```typescript
import { DatabaseConnectionOptionsSslOptions } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DatabaseConnectionOptionsSslOptions = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `sslMode`                                                                                                  | [components.DatabaseConnectionOptionsSslMode](../../models/components/databaseconnectionoptionssslmode.md) | :heavy_minus_sign:                                                                                         | SSL mode such as require, verify-ca, verify-full as applicable                                             |
| `sslCAPath`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | CA file path                                                                                               |
| `sslKeyPath`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | SSL key file path                                                                                          |
| `sslCertPath`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | SSL cert file path                                                                                         |