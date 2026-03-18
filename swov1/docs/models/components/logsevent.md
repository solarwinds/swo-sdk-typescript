# LogsEvent

## Example Usage

```typescript
import { LogsEvent } from "@solarwinds/swo-sdk-typescript/models/components";

let value: LogsEvent = {
  id: "1793698955374546944",
  time: "2024-01-01T00:00:00Z",
  message: "This is a log message",
  hostname: "webserver.example.com",
  severity: "INFO",
  program: "httpd",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | Unique identifier of the log event.                  | 1793698955374546944                                  |
| `time`                                               | *string*                                             | :heavy_check_mark:                                   | Timestamp of the log event.                          | 2024-01-01T00:00:00Z                                 |
| `message`                                            | *string*                                             | :heavy_check_mark:                                   | Log message content.                                 | This is a log message                                |
| `hostname`                                           | *string*                                             | :heavy_check_mark:                                   | Hostname of the server that generated the log event. | webserver.example.com                                |
| `severity`                                           | *string*                                             | :heavy_check_mark:                                   | Severity level of the log event.                     | INFO                                                 |
| `program`                                            | *string*                                             | :heavy_check_mark:                                   | Name of the program that generated the log event.    | httpd                                                |