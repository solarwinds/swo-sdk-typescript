# CloudAccountsAwsOrganisationalUnitRequest

## Example Usage

```typescript
import { CloudAccountsAwsOrganisationalUnitRequest } from "@solarwinds/swo-sdk-typescript/models/components";

let value: CloudAccountsAwsOrganisationalUnitRequest = {
  mgmtAccountId: "<id>",
  structure: [
    {
      childId: "<id>",
      childName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `mgmtAccountId`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | AWS Control Tower Management Account ID.                                                                         |
| `structure`                                                                                                      | [components.CloudAccountsAwsOrganisationalUnit](../../models/components/cloudaccountsawsorganisationalunit.md)[] | :heavy_check_mark:                                                                                               | Organisational Structure of the AWS Account.                                                                     |