# AwsOrganisationalUnitRequest

## Example Usage

```typescript
import { AwsOrganisationalUnitRequest } from "@solarwinds/swo-sdk-typescript/models/components";

let value: AwsOrganisationalUnitRequest = {
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mgmtAccountId`                                                                  | *string*                                                                         | :heavy_check_mark:                                                               | AWS Control Tower Management Account ID.                                         |
| `structure`                                                                      | [components.OrganisationalUnit](../../models/components/organisationalunit.md)[] | :heavy_check_mark:                                                               | Organisational Structure of the AWS Account.                                     |