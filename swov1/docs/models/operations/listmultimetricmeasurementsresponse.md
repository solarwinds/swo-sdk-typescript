# ListMultiMetricMeasurementsResponse

## Example Usage

```typescript
import { ListMultiMetricMeasurementsResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMultiMetricMeasurementsResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                 | [operations.ListMultiMetricMeasurementsResponseBody](../../models/operations/listmultimetricmeasurementsresponsebody.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |