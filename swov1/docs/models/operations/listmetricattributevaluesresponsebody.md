# ListMetricAttributeValuesResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ListMetricAttributeValuesResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricAttributeValuesResponseBody = {
  name: "<value>",
  values: [
    "<value 1>",
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
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Attribute name.                                                        |
| `values`                                                               | *string*[]                                                             | :heavy_check_mark:                                                     | List of attribute values.                                              |
| `pageInfo`                                                             | [components.CommonPageInfo](../../models/components/commonpageinfo.md) | :heavy_check_mark:                                                     | Pagination information.                                                |