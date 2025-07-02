# ListEntitiesResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ListEntitiesResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListEntitiesResponseBody = {
  entities: [],
  pageInfo: {
    prevPage: "<value>",
    nextPage: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `entities`                                                             | [components.Entity](../../models/components/entity.md)[]               | :heavy_check_mark:                                                     | N/A                                                                    |
| `pageInfo`                                                             | [components.CommonPageInfo](../../models/components/commonpageinfo.md) | :heavy_check_mark:                                                     | N/A                                                                    |