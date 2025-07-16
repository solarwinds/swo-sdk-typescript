# ListMultiMetricMeasurementsRequestBody

## Example Usage

```typescript
import { ListMultiMetricMeasurementsRequestBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMultiMetricMeasurementsRequestBody = {
  metrics: [
    {
      id: "throughput-series",
      name: "dbo.host.queries.tput",
      filter: "id:[id1,id2] category:moderate",
      groupBy: [
        "query",
      ],
      preGroupBy: [
        "host",
      ],
      preGroupByMethod: "SUM",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `metrics`                                                                                        | [components.MetricsMeasurementsRequest](../../models/components/metricsmeasurementsrequest.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `startTime`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | Timestamp in ISO 8601 format in UTC timezone: yyyy-MM-ddTHH:mm:ssZ                               |
| `endTime`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | Timestamp in ISO 8601 format in UTC timezone: yyyy-MM-ddTHH:mm:ssZ                               |