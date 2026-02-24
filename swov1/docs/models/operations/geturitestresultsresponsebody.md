# GetUriTestResultsResponseBody

An array of test results with pagination info

## Example Usage

```typescript
import { GetUriTestResultsResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: GetUriTestResultsResponseBody = {
  results: [
    {
      time: new Date("2025-01-15T14:31:19.735Z"),
      probe: {
        id: "probe-1",
        name: "Washington",
        active: true,
        platform: "AWS",
        region: "NA",
        country: "US",
        city: "Washington D.C.",
        coordinates: {
          latitude: 38.89511,
          longitude: -77.03637,
        },
        ipv4Addresses: [
          "34.232.5.40",
          "44.207.30.12",
        ],
        ipv6Addresses: [
          "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
        ],
      },
      responseTime: 376,
      status: "up",
      phase: "connection",
      description: "Connection timeout",
      message:
        "Connection timeout occurred while attempting to connect to the target server",
      analysisId: "analysis-12345",
      validationsId: "validation-67890",
    },
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
| `results`                                                              | [components.DemTestResult](../../models/components/demtestresult.md)[] | :heavy_check_mark:                                                     | Uri test results                                                       |
| `pageInfo`                                                             | [components.CommonPageInfo](../../models/components/commonpageinfo.md) | :heavy_check_mark:                                                     | Pagination information                                                 |