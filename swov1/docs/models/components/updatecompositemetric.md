# UpdateCompositeMetric

## Example Usage

```typescript
import { UpdateCompositeMetric } from "@solarwinds/swo-sdk-typescript/models/components";

let value: UpdateCompositeMetric = {
  displayName: "Disk IO rate",
  description: "Disk bytes transferred per second",
  formula: "rate(system.disk.io[5m])",
  units: "bytes/s",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `displayName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | Display name of the composite metric. A short description of the metric.   | Disk IO rate                                                               |
| `description`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | Description of the composite metric. A detailed description of the metric. | Disk bytes transferred per second                                          |
| `formula`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | PromQL query to calculate the composite metric                             | rate(system.disk.io[5m])                                                   |
| `units`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | Unit of the composite metric                                               | bytes/s                                                                    |