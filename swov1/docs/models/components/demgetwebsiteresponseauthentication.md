# DemGetWebsiteResponseAuthentication

  Configure HTTP basic authentication for the availability probe requests.
  The credentialId field accepts a DEM credential ID, not a plaintext password.
  If omitted or set to null, no authentication is applied.

## Example Usage

```typescript
import { DemGetWebsiteResponseAuthentication } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemGetWebsiteResponseAuthentication = {
  username: "Walton50",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `username`                                                                                                                                                           | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | Username for HTTP basic authentication.                                                                                                                              |
| `credentialId`                                                                                                                                                       | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   |   The ID of a DEM synthetic credential. The credential's value is used as the password.<br/>  If omitted or set to null, authentication proceeds with the username only. |