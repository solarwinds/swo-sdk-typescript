# DemUri

## Example Usage

```typescript
import { DemUri } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemUri = {
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
    dns: {
      enabled: false,
      nameserver: "8.8.8.8",
      port: 53,
      ipToExpect: "1.2.3.4",
    },
    ping: {
      enabled: false,
    },
    tcp: {
      enabled: true,
      port: 443,
      stringToSend:
        "GET / HTTP/1.1\r\nHost: solarwinds.com\r\nConnection: close\r\n\r\n",
      stringToExpect: "HTTP/1.1 200 OK",
    },
    udp: {
      enabled: false,
      port: 8888,
      stringToSend:
        "GET / HTTP/1.1\r\nHost: solarwinds.com\r\nConnection: close\r\n\r\n",
      stringToExpect: "HTTP/1.1 200 OK",
    },
  },
  tags: [
    {
      key: "environment",
      value: "production",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      | Example                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                                           | *string*                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                               | Name of the URI, which must be unique within the organization. The name must also not contain any control characters, any white space other than space (U+0020), or any consecutive, leading or trailing spaces. | solarwinds.com                                                                                                                                                                                                   |
| `ipOrDomain`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                               | IP/domain of the URI.                                                                                                                                                                                            | solarwinds.com                                                                                                                                                                                                   |
| `availabilityCheckSettings`                                                                                                                                                                                      | [components.DemUriAvailabilityCheckSettingsInput](../../models/components/demuriavailabilitychecksettingsinput.md)                                                                                               | :heavy_check_mark:                                                                                                                                                                                               | Availability tests configuration for the URI.                                                                                                                                                                    |                                                                                                                                                                                                                  |
| `tags`                                                                                                                                                                                                           | [components.CommonTag](../../models/components/commontag.md)[]                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                               | Tags associated with the URI for categorization.                                                                                                                                                                 |                                                                                                                                                                                                                  |