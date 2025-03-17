# ListMetricsResponse

## Example Usage

```typescript
import { ListMetricsResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricsResponse = {
  result: {
    metricsInfo: [
      {
        name: "composite.custom.system.disk.io.rate",
        displayName: "Disk IO rate",
        description: "Disk bytes transferred per second",
        units: "bytes/s",
        formula: "rate(system.disk.io[5m]",
        lastReportedTime: new Date("2024-11-25T16:38:24Z"),
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [operations.ListMetricsResponseBody](../../models/operations/listmetricsresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |