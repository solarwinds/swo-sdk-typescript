# OrganisationalUnit

## Example Usage

```typescript
import { OrganisationalUnit } from "@solarwinds/swo-sdk-typescript/models/components";

let value: OrganisationalUnit = {
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