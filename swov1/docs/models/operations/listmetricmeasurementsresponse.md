# ListMetricMeasurementsResponse

## Example Usage

```typescript
import { ListMetricMeasurementsResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricMeasurementsResponse = {
  result: {
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
    bucketSizeInSeconds: 258191,
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