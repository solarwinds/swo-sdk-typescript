# ListEntitiesRequest

## Example Usage

```typescript
import { ListEntitiesRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListEntitiesRequest = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The entity type to search. If omitted or empty, the search includes all entity types.                            |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The entity name to search for. Searches are case-insensitive and match any value containing the provided string. |
| `pageSize`                                                                                                       | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Number of items in a response page. Default varies by API.                                                       |
| `skipToken`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Token for the requested page.                                                                                    |