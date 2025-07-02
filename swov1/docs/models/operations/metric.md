# Metric

## Example Usage

```typescript
import { Metric } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: Metric = {
  id: "throughput-series",
  name: "dbo.host.queries.tput",
  groupings: [
    {
      attributes: [],
      measurements: [
        {
          time: new Date("2025-06-12T04:58:43.421Z"),
          value: 1220.89,
        },
      ],
    },
  ],
  bucketSizeInSeconds: 1,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | Entry identification, as (if) provided in the corresponding request entry. | throughput-series                                                          |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Metric name.                                                               | dbo.host.queries.tput                                                      |
| `groupings`                                                                | [components.MetricsGrouping](../../models/components/metricsgrouping.md)[] | :heavy_check_mark:                                                         | Collection of attributes and measurements.                                 |                                                                            |
| `bucketSizeInSeconds`                                                      | *number*                                                                   | :heavy_check_mark:                                                         | Bucket size used for computing points in this entry.                       | 1                                                                          |