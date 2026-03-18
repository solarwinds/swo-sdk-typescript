# SearchLogsResponseBody

The request has succeeded.

## Example Usage

```typescript
import { SearchLogsResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: SearchLogsResponseBody = {
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
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `logs`                                                                 | [components.LogsEvent](../../models/components/logsevent.md)[]         | :heavy_check_mark:                                                     | Array of log events.                                                   |
| `pageInfo`                                                             | [components.CommonPageInfo](../../models/components/commonpageinfo.md) | :heavy_check_mark:                                                     | Pagination information.                                                |