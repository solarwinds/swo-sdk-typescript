# ListMultiMetricMeasurementsRequest

## Example Usage

```typescript
import { ListMultiMetricMeasurementsRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMultiMetricMeasurementsRequest = {
  requestBody: {
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
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `forcePositional`                                                                                                      | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Forces a positional response; see the operation description.                                                           |
| `pageSize`                                                                                                             | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | Number of items in a response page. Default varies by API.                                                             |
| `skipToken`                                                                                                            | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Token for the requested page.                                                                                          |
| `requestBody`                                                                                                          | [operations.ListMultiMetricMeasurementsRequestBody](../../models/operations/listmultimetricmeasurementsrequestbody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |