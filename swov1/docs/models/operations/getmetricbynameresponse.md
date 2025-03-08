# GetMetricByNameResponse

## Example Usage

```typescript
import { GetMetricByNameResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: GetMetricByNameResponse = {
  result: {
    name: "composite.k8s.pod.container.status.restarts.increase",
    units: "count",
    formula: "increase(k8s.kube_pod_container_status_restarts_total[5m])",
    lastReportedTime: "2021-01-01T00:00:00Z",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `result`                                                                   | [components.CommonMetricInfo](../../models/components/commonmetricinfo.md) | :heavy_check_mark:                                                         | N/A                                                                        |