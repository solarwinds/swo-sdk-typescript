# SearchLogsResponse

## Example Usage

```typescript
import { SearchLogsResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: SearchLogsResponse = {
  result: {
    logs: [],
    pageInfo: {
      prevPage: "<value>",
      nextPage: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [operations.SearchLogsResponseBody](../../models/operations/searchlogsresponsebody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |