# ListMetricsResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ListMetricsResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricsResponseBody = {
  metricsInfo: [],
  pageInfo: {
    prevPage: "<value>",
    nextPage: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `metricsInfo`                                                                | [components.CommonMetricInfo](../../models/components/commonmetricinfo.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pageInfo`                                                                   | [components.CommonPageInfo](../../models/components/commonpageinfo.md)       | :heavy_check_mark:                                                           | N/A                                                                          |