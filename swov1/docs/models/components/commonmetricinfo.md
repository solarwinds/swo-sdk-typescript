# CommonMetricInfo

## Example Usage

```typescript
import { CommonMetricInfo } from "@solarwinds/swo-sdk-typescript/models/components";

let value: CommonMetricInfo = {
  name: "composite.k8s.pod.container.status.restarts.increase",
  units: "count",
  formula: "increase(k8s.kube_pod_container_status_restarts_total[5m])",
  lastReportedTime: "2021-01-01T00:00:00Z",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | Name of the metric                                         | composite.k8s.pod.container.status.restarts.increase       |
| `units`                                                    | *string*                                                   | :heavy_check_mark:                                         | Units of the metric                                        | count                                                      |
| `formula`                                                  | *string*                                                   | :heavy_minus_sign:                                         | Formula of the metric                                      | increase(k8s.kube_pod_container_status_restarts_total[5m]) |
| `lastReportedTime`                                         | *string*                                                   | :heavy_check_mark:                                         | Last reported time of the metric                           | 2021-01-01T00:00:00Z                                       |