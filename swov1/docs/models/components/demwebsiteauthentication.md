# DemWebsiteAuthentication

  Configure HTTP basic authentication for the availability probe requests.
  The credentialId field accepts a DEM credential ID, not a plaintext password.
  If omitted or set to null, no authentication is applied.

## Example Usage

```typescript
import { DemWebsiteAuthentication } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemWebsiteAuthentication = {
  username: "Ervin.Franecki",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `username`                                                                                                                                                           | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | Username for HTTP basic authentication.                                                                                                                              |
| `credentialId`                                                                                                                                                       | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   |   The ID of a DEM synthetic credential. The credential's value is used as the password.<br/>  If omitted or set to null, authentication proceeds with the username only. |