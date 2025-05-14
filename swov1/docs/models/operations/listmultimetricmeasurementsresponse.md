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
                time: new Date("2024-10-07T14:39:00.483Z"),
                value: 4417.41,
              },
            ],
          },
        ],
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