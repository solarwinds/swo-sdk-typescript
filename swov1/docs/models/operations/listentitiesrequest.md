# ListEntitiesRequest

## Example Usage

```typescript
import { ListEntitiesRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListEntitiesRequest = {
  type: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | The entity type to search for                              |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | The entity name to search for                              |
| `pageSize`                                                 | *number*                                                   | :heavy_minus_sign:                                         | Number of items in a response page. Default varies by API. |
| `skipToken`                                                | *string*                                                   | :heavy_minus_sign:                                         | Token for the requested page                               |