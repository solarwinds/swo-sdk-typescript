# CloudAccountsAwsActivateIntegrationRequest

## Example Usage

```typescript
import { CloudAccountsAwsActivateIntegrationRequest } from "@solarwinds/swo-sdk-typescript/models/components";

let value: CloudAccountsAwsActivateIntegrationRequest = {
  managementAccountId: "<id>",
  accountId: "<id>",
  enable: true,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `managementAccountId`                             | *string*                                          | :heavy_check_mark:                                | AWS Control Tower Management Account ID.          |
| `accountId`                                       | *string*                                          | :heavy_check_mark:                                | AWS Accounts ID to be integrated.                 |
| `enable`                                          | *boolean*                                         | :heavy_check_mark:                                | True to enable the integration, false to disable. |