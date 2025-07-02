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
| `groupings`                                                                | [components.MetricsGrouping](../../models/components/metricsgrouping.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `bucketSizeInSeconds`                                                      | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageInfo`                                                                 | [components.CommonPageInfo](../../models/components/commonpageinfo.md)     | :heavy_check_mark:                                                         | N/A                                                                        |