# GetMetricByNameResponse

## Example Usage

```typescript
import { GetMetricByNameResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: GetMetricByNameResponse = {
  result: {
    name: "composite.custom.system.disk.io.rate",
    displayName: "Disk IO rate",
    description: "Disk bytes transferred per second",
    units: "bytes/s",
    formula: "rate(system.disk.io[5m]",
    lastReportedTime: new Date("2024-11-25T16:38:24Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `result`                                                                   | [components.CommonMetricInfo](../../models/components/commonmetricinfo.md) | :heavy_check_mark:                                                         | N/A                                                                        |