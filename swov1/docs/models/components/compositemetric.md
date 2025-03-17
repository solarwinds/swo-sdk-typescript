# CompositeMetric

## Example Usage

```typescript
import { CompositeMetric } from "@solarwinds/swo-sdk-typescript/models/components";

let value: CompositeMetric = {
  name: "composite.custom.system.disk.io.rate",
  displayName: "Disk IO rate",
  description: "Disk bytes transferred per second",
  formula: "rate(system.disk.io[5m])",
  units: "bytes/s",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Name of the composite metric.                                              | composite.custom.system.disk.io.rate                                       |
| `displayName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Display name of the composite metric. A short description of the metric.   | Disk IO rate                                                               |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Description of the composite metric. A detailed description of the metric. | Disk bytes transferred per second                                          |
| `formula`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | PromQL query to calculate the composite metric.                            | rate(system.disk.io[5m])                                                   |
| `units`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | Unit of the composite metric.                                              | bytes/s                                                                    |