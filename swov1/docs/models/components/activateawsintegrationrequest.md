# ActivateAwsIntegrationRequest

## Example Usage

```typescript
import { ActivateAwsIntegrationRequest } from "@solarwinds/swo-sdk-typescript/models/components";

let value: ActivateAwsIntegrationRequest = {
  managementAccountId: "<id>",
  accountId: "<id>",
  enable: false,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `managementAccountId`                             | *string*                                          | :heavy_check_mark:                                | AWS Control Tower Management Account ID.          |
| `accountId`                                       | *string*                                          | :heavy_check_mark:                                | AWS Accounts ID to be integrated.                 |
| `enable`                                          | *boolean*                                         | :heavy_check_mark:                                | True to enable the integration, false to disable. |