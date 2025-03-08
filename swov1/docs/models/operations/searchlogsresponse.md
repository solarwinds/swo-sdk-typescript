# SearchLogsResponse

## Example Usage

```typescript
import { SearchLogsResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: SearchLogsResponse = {
  result: {
    logs: [
      {
        id: "1793698955374546944",
        time: "2024-01-01T00:00:00Z",
        message: "This is a log message",
        hostname: "webserver.example.com",
        severity: "INFO",
        program: "httpd",
      },
    ],
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