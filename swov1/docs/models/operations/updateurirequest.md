# UpdateUriRequest

## Example Usage

```typescript
import { UpdateUriRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: UpdateUriRequest = {
  entityId: "<id>",
  demUri: {
    name: "solarwinds.com",
    ipOrDomain: "solarwinds.com",
    availabilityCheckSettings: {
      platformOptions: {
        probePlatforms: [
          "AWS",
        ],
        testFromAll: true,
      },
      testFrom: {
        type: "REGION",
        values: [
          "NA",
        ],
      },
      testIntervalInSeconds: 14400,
      outageConfiguration: {
        failingTestLocations: "all",
        consecutiveForDown: 2,
      },
      ping: {
        enabled: true,
      },
      tcp: {
        enabled: true,
        port: 443,
        stringToSend: "GET / HTTP/1.1\r\n"
          + "Host: solarwinds.com\r\n"
          + "Connection: close\r\n"
          + "\r\n"
          + "",
        stringToExpect: "HTTP/1.1 200 OK",
      },
    },
    tags: [
      {
        key: "environment",
        value: "production",
      },
    ],
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `entityId`                                             | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `demUri`                                               | [components.DemUri](../../models/components/demuri.md) | :heavy_check_mark:                                     | The updated URI monitoring configuration               |