# GetUriOutageStatusesResponse

## Example Usage

```typescript
import { GetUriOutageStatusesResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: GetUriOutageStatusesResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [operations.GetUriOutageStatusesResponseBody](../../models/operations/geturioutagestatusesresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |