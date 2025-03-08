# ListEntitiesResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ListEntitiesResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListEntitiesResponseBody = {
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
      healthscore: {
        score: 100,
        category: "good",
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
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `entities`                                                             | [components.Entity](../../models/components/entity.md)[]               | :heavy_check_mark:                                                     | N/A                                                                    |
| `pageInfo`                                                             | [components.CommonPageInfo](../../models/components/commonpageinfo.md) | :heavy_check_mark:                                                     | N/A                                                                    |