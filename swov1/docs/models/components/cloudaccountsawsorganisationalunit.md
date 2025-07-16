# CloudAccountsAwsOrganisationalUnit

## Example Usage

```typescript
import { CloudAccountsAwsOrganisationalUnit } from "@solarwinds/swo-sdk-typescript/models/components";

let value: CloudAccountsAwsOrganisationalUnit = {
  childId: "<id>",
  childName: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `childId`                       | *string*                        | :heavy_check_mark:              | AWS Account ID/Org unit ID.     |
| `childName`                     | *string*                        | :heavy_check_mark:              | AWS Account Name/Org unit Name. |
| `parentId`                      | *string*                        | :heavy_minus_sign:              | Parent Org unit ID.             |