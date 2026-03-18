# CommonLink

## Example Usage

```typescript
import { CommonLink } from "@solarwinds/swo-sdk-typescript/models/components";

let value: CommonLink = {
  rel: "<value>",
  href: "<value>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `rel`                                             | *string*                                          | :heavy_check_mark:                                | Relationship of the link to the current resource. |
| `href`                                            | *string*                                          | :heavy_check_mark:                                | URL of the linked resource.                       |
| `label`                                           | *string*                                          | :heavy_minus_sign:                                | Display label for the link.                       |