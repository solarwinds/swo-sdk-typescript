# UpdateAwsIntegrationRequest

## Example Usage

```typescript
import { UpdateAwsIntegrationRequest } from "@solarwinds/swo-sdk-typescript/models/components";

let value: UpdateAwsIntegrationRequest = {
  managementAccountId: "<id>",
  accountId: "<id>",
  accountName: "<value>",
  roleArn: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `managementAccountId`                                                      | *string*                                                                   | :heavy_check_mark:                                                         | AWS Control Tower Management Account ID.                                   |
| `accountId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | AWS Accounts ID to be integrated.                                          |
| `accountName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | Name of the AWS Account.                                                   |
| `roleArn`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Role ARN to be assumed by the AWS Account.                                 |
| `orgUnitId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | AWS Account ID.                                                            |
| `orgUnitName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | AWS Organizational Unit Name.                                              |
| `parentOrgUnitId`                                                          | *string*                                                                   | :heavy_minus_sign:                                                         | Immediate Parent Organization Unit ID of the AWS Account to be integrated. |