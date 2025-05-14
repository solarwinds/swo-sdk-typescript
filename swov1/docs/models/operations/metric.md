# Metric

## Example Usage

```typescript
import { Metric } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: Metric = {
  id: "throughput-series",
  name: "dbo.host.queries.tput",
  groupings: [
    {
      attributes: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      measurements: [
        {
          time: new Date("2025-05-30T00:58:39.369Z"),
          value: 1009.14,
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