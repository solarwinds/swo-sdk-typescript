# ListMetricAttributeValuesResponse

## Example Usage

```typescript
import { ListMetricAttributeValuesResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricAttributeValuesResponse = {
  result: {
    name: "<value>",
    values: [
      "<value 1>",
      "<value 2>",
    ],
    pageInfo: {
      prevPage: "<value>",
      nextPage: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [operations.ListMetricAttributeValuesResponseBody](../../models/operations/listmetricattributevaluesresponsebody.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |