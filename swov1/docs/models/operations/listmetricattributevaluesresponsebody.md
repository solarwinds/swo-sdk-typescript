# ListMetricAttributeValuesResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ListMetricAttributeValuesResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricAttributeValuesResponseBody = {
  name: "<value>",
  values: [
    "<value>",
  ],
  pageInfo: {
    prevPage: "<value>",
    nextPage: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `values`                                                               | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `pageInfo`                                                             | [components.CommonPageInfo](../../models/components/commonpageinfo.md) | :heavy_check_mark:                                                     | N/A                                                                    |