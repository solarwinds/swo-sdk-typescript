# ListMetricsResponse

## Example Usage

```typescript
import { ListMetricsResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricsResponse = {
  result: {
    metricsInfo: [
      {
        name: "composite.k8s.pod.container.status.restarts.increase",
        units: "count",
        formula: "increase(k8s.kube_pod_container_status_restarts_total[5m])",
        lastReportedTime: "2021-01-01T00:00:00Z",
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