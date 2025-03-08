# ListMetricsResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ListMetricsResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricsResponseBody = {
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `metricsInfo`                                                                | [components.CommonMetricInfo](../../models/components/commonmetricinfo.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pageInfo`                                                                   | [components.CommonPageInfo](../../models/components/commonpageinfo.md)       | :heavy_check_mark:                                                           | N/A                                                                          |