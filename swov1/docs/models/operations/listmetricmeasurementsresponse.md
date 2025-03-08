# ListMetricMeasurementsResponse

## Example Usage

```typescript
import { ListMetricMeasurementsResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricMeasurementsResponse = {
  result: {
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
            time: new Date("2024-04-24T14:17:38.418Z"),
            value: 8917.73,
          },
        ],
      },
    ],
    bucketSizeInSeconds: 963663,
    pageInfo: {
      prevPage: "<value>",
      nextPage: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.ListMetricMeasurementsResponseBody](../../models/operations/listmetricmeasurementsresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |