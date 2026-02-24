# ListEntitiesResponse

## Example Usage

```typescript
import { ListEntitiesResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListEntitiesResponse = {
  result: {
    entities: [
      {
        id: "e-1234567890",
        type: "SyslogHost",
        name: "syslog-host-1",
        displayName: "SyslogTest",
        createdTime: new Date("2024-11-25T16:38:24Z"),
        updatedTime: new Date("2024-12-01T16:38:24Z"),
        lastSeenTime: new Date("2024-11-25T16:38:24Z"),
        inMaintenance: false,
        healthState: {
          state: "GOOD",
        },
        tags: {
          "gg.tk.token": "test",
          "kfi.tk.token": "qa-test",
        },
        attributes: {
          "protocols": [
            "HTTP",
          ],
          "features": [
            "rum",
          ],
          "isAvailabilityCheckPaused": false,
          "extensions": {
            "has_extension": true,
          },
        },
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [operations.ListEntitiesResponseBody](../../models/operations/listentitiesresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |