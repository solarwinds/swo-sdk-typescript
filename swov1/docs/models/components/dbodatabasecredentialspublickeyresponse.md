# DboDatabaseCredentialsPublicKeyResponse

## Example Usage

```typescript
import { DboDatabaseCredentialsPublicKeyResponse } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DboDatabaseCredentialsPublicKeyResponse = {
  publicKey: "<value>",
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `publicKey`                                                                                                                                 | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          |   Public Key for locally encrypting database credentials before using in database connectivity options<br/>  in observe or update Database call |