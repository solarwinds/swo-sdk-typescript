# DatabaseCredentialsPublicKeyResponse

## Example Usage

```typescript
import { DatabaseCredentialsPublicKeyResponse } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DatabaseCredentialsPublicKeyResponse = {
  publicKey: "<value>",
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `publicKey`                                                                                                                                 | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          |   Public Key for locally encrypting database credentials before using in database connectivity options<br/>  in observe or update Database call |