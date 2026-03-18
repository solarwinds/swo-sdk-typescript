# ListMultiMetricMeasurementsResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ListMultiMetricMeasurementsResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMultiMetricMeasurementsResponseBody = {
  metrics: [
    {
      id: "throughput-series",
      name: "dbo.host.queries.tput",
      groupings: [],
      bucketSizeInSeconds: 1,
    },
  ],
  pageInfo: {
    prevPage: "<value>",
    nextPage: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `metrics`                                                              | [operations.Metric](../../models/operations/metric.md)[]               | :heavy_check_mark:                                                     | Metric measurement results.                                            |
| `pageInfo`                                                             | [components.CommonPageInfo](../../models/components/commonpageinfo.md) | :heavy_check_mark:                                                     | Pagination information.                                                |