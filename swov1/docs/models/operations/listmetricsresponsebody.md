# ListMetricsResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ListMetricsResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricsResponseBody = {
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `metricsInfo`                                                                | [components.CommonMetricInfo](../../models/components/commonmetricinfo.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pageInfo`                                                                   | [components.CommonPageInfo](../../models/components/commonpageinfo.md)       | :heavy_check_mark:                                                           | N/A                                                                          |