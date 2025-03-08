# ListMetricAttributesResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ListMetricAttributesResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricAttributesResponseBody = {
  names: [
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
| `names`                                                                | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `pageInfo`                                                             | [components.CommonPageInfo](../../models/components/commonpageinfo.md) | :heavy_check_mark:                                                     | N/A                                                                    |