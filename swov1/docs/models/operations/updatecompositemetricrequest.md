# UpdateCompositeMetricRequest

## Example Usage

```typescript
import { UpdateCompositeMetricRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: UpdateCompositeMetricRequest = {
  name: "<value>",
  metricsUpdateCompositeMetricRequest: {
    displayName: "Disk IO rate",
    description: "Disk bytes transferred per second",
    formula: "rate(system.disk.io[5m])",
    units: "bytes/s",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The metric name                                                                                                  |
| `metricsUpdateCompositeMetricRequest`                                                                            | [components.MetricsUpdateCompositeMetricRequest](../../models/components/metricsupdatecompositemetricrequest.md) | :heavy_check_mark:                                                                                               | Metric properties to update                                                                                      |