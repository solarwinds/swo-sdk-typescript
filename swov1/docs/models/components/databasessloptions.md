# DatabaseSslOptions

## Example Usage

```typescript
import { DatabaseSslOptions } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DatabaseSslOptions = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sslMode`                                                                                    | [components.DatabaseSslOptionsSslMode](../../models/components/databasessloptionssslmode.md) | :heavy_minus_sign:                                                                           | SSL mode such as require, verify-ca, verify-full as applicable                               |
| `sslCAPath`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | CA file path                                                                                 |
| `sslKeyPath`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | SSL key file path                                                                            |
| `sslCertPath`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | SSL cert file path                                                                           |