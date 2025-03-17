# CommonMetricInfo

## Example Usage

```typescript
import { CommonMetricInfo } from "@solarwinds/swo-sdk-typescript/models/components";

let value: CommonMetricInfo = {
  name: "composite.custom.system.disk.io.rate",
  displayName: "Disk IO rate",
  description: "Disk bytes transferred per second",
  units: "bytes/s",
  formula: "rate(system.disk.io[5m]",
  lastReportedTime: new Date("2024-11-25T16:38:24Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the metric.                                                                           | composite.custom.system.disk.io.rate                                                          |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Display name of the metric. A short description of the metric.                                | Disk IO rate                                                                                  |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the metric. A detailed description of the metric.                              | Disk bytes transferred per second                                                             |
| `units`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unit of the metric.                                                                           | bytes/s                                                                                       |
| `formula`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Formula of the metric.                                                                        | rate(system.disk.io[5m]                                                                       |
| `lastReportedTime`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Last reported time of the metric.                                                             | 2024-11-25T16:38:24Z                                                                          |