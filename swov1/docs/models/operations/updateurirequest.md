# UpdateUriRequest

## Example Usage

```typescript
import { UpdateUriRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: UpdateUriRequest = {
  entityId: "<id>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `entityId`                                       | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `uri`                                            | [components.Uri](../../models/components/uri.md) | :heavy_check_mark:                               | The updated URI monitoring configuration         |