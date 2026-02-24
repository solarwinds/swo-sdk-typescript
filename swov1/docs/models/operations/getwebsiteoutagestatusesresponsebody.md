# GetWebsiteOutageStatusesResponseBody

An array of outage statues with pagination info

## Example Usage

```typescript
import { GetWebsiteOutageStatusesResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: GetWebsiteOutageStatusesResponseBody = {
  statuses: [
    {
      startTime: new Date("2025-01-15T14:31:19.735Z"),
      endTime: new Date("2025-01-15T14:31:19.735Z"),
      status: "up",
      resultId: "result-67890",
      analysisId: "analysis-12345",
    },
  ],
  pageInfo: {
    prevPage: "<value>",
    nextPage: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `statuses`                                                                 | [components.DemOutageStatus](../../models/components/demoutagestatus.md)[] | :heavy_check_mark:                                                         | Website outage statuses                                                    |
| `pageInfo`                                                                 | [components.CommonPageInfo](../../models/components/commonpageinfo.md)     | :heavy_check_mark:                                                         | Pagination information                                                     |