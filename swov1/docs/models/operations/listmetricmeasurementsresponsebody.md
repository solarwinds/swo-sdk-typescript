# ListMetricMeasurementsResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ListMetricMeasurementsResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricMeasurementsResponseBody = {
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
          time: new Date("2024-04-22T08:27:29.790Z"),
          value: 5467.36,
        },
      ],
    },
  ],
  bucketSizeInSeconds: 394183,
  pageInfo: {
    prevPage: "<value>",
    nextPage: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `groupings`                                                                | [components.MetricsGrouping](../../models/components/metricsgrouping.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `bucketSizeInSeconds`                                                      | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageInfo`                                                                 | [components.CommonPageInfo](../../models/components/commonpageinfo.md)     | :heavy_check_mark:                                                         | N/A                                                                        |