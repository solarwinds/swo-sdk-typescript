# ListMetricMeasurementsResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ListMetricMeasurementsResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricMeasurementsResponseBody = {
  groupings: [],
  bucketSizeInSeconds: 546736,
  pageInfo: {
    prevPage: "<value>",
    nextPage: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `groupings`                                                                | [components.MetricsGrouping](../../models/components/metricsgrouping.md)[] | :heavy_check_mark:                                                         | Measurement data grouped by attributes.                                    |
| `bucketSizeInSeconds`                                                      | *number*                                                                   | :heavy_check_mark:                                                         | Bucket size used for computing time series points, in seconds.             |
| `pageInfo`                                                                 | [components.CommonPageInfo](../../models/components/commonpageinfo.md)     | :heavy_check_mark:                                                         | Pagination information.                                                    |