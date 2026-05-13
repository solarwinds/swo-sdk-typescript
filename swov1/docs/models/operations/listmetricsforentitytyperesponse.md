# ListMetricsForEntityTypeResponse

The request has succeeded.

## Example Usage

```typescript
import { ListMetricsForEntityTypeResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricsForEntityTypeResponse = {
  type: "KubernetesCluster",
  metrics: [
    {
      name: "composite.k8s.pod.container.status.restarts.increase",
      units: "count",
      formula: "increase(k8s.kube_pod_container_status_restarts_total[5m])",
      lastReportedTime: new Date("2021-01-01T00:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                         | Type                                                                                                                                                                                                          | Required                                                                                                                                                                                                      | Description                                                                                                                                                                                                   | Example                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | Entity type name.                                                                                                                                                                                             | KubernetesCluster                                                                                                                                                                                             |
| `metrics`                                                                                                                                                                                                     | [components.CommonMetricInfo](../../models/components/commonmetricinfo.md)[]                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                            | A list of metrics and their metadata. An empty list indicates no metrics matched the given parameters.                                                                                                        | [<br/>{<br/>"name": "composite.k8s.pod.container.status.restarts.increase",<br/>"units": "count",<br/>"formula": "increase(k8s.kube_pod_container_status_restarts_total[5m])",<br/>"lastReportedTime": "2021-01-01T00:00:00Z"<br/>}<br/>] |