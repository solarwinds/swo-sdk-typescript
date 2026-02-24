# GetUriOutageStatusesResponseBody

An array of outage statuses with pagination info

## Example Usage

```typescript
import { GetUriOutageStatusesResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: GetUriOutageStatusesResponseBody = {
  statuses: [],
  pageInfo: {
    prevPage: "<value>",
    nextPage: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `statuses`                                                                 | [components.DemOutageStatus](../../models/components/demoutagestatus.md)[] | :heavy_check_mark:                                                         | Uri outage statuses                                                        |
| `pageInfo`                                                                 | [components.CommonPageInfo](../../models/components/commonpageinfo.md)     | :heavy_check_mark:                                                         | Pagination information                                                     |