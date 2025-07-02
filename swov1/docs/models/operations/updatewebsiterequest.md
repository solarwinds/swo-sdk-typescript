# UpdateWebsiteRequest

## Example Usage

```typescript
import { UpdateWebsiteRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: UpdateWebsiteRequest = {
  entityId: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `entityId`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `website`                                                | [components.Website](../../models/components/website.md) | :heavy_check_mark:                                       | The updated website monitoring configuration             |