# DemGetUriResponse

## Example Usage

```typescript
import { DemGetUriResponse } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemGetUriResponse = {
  id: "e-1448474379026206720",
  type: "Uri",
  status: "up",
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
    protocol: "PING",
  },
  tags: [
    {
      key: "environment",
      value: "production",
    },
  ],
  lastOutageStartTime: new Date("2025-01-15T14:31:19.735Z"),
  lastOutageEndTime: new Date("2025-01-15T14:31:19.735Z"),
  lastTestTime: new Date("2025-01-15T14:31:19.735Z"),
  lastErrorTime: new Date("2025-01-15T14:31:19.735Z"),
  lastResponseTime: 376,
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          | Example                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                   | Unique identifier of the URI.                                                                                                                                                                                        | e-1448474379026206720                                                                                                                                                                                                |
| `type`                                                                                                                                                                                                               | *string*                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                   | Entity type, always 'Uri'.                                                                                                                                                                                           | Uri                                                                                                                                                                                                                  |
| `status`                                                                                                                                                                                                             | [components.DemGetUriResponseStatus](../../models/components/demgeturiresponsestatus.md)                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                   | Current availability status of the URI.                                                                                                                                                                              | up                                                                                                                                                                                                                   |
| `name`                                                                                                                                                                                                               | *string*                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                   |   Name of the URI, which must be unique within the organization.<br/>  The name must also not contain any control characters, any white space other than space (U+0020), or any consecutive, leading or trailing spaces. | solarwinds.com                                                                                                                                                                                                       |
| `ipOrDomain`                                                                                                                                                                                                         | *string*                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                   | IP/domain address of the URI.                                                                                                                                                                                        | solarwinds.com                                                                                                                                                                                                       |
| `availabilityCheckSettings`                                                                                                                                                                                          | [components.DemUriAvailabilityCheckSettings](../../models/components/demuriavailabilitychecksettings.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                   | Availability check tests configuration for the URI.                                                                                                                                                                  |                                                                                                                                                                                                                      |
| `tags`                                                                                                                                                                                                               | [components.CommonTag](../../models/components/commontag.md)[]                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                   | Entity tags. Tag is a key-value pair, where there may be only single tag value for the same key.                                                                                                                     |                                                                                                                                                                                                                      |
| `lastOutageStartTime`                                                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                   | Time when the last outage started.                                                                                                                                                                                   | 2025-01-15T14:31:19.735Z                                                                                                                                                                                             |
| `lastOutageEndTime`                                                                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                   | Time when the last outage ended.                                                                                                                                                                                     | 2025-01-15T14:31:19.735Z                                                                                                                                                                                             |
| `lastTestTime`                                                                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                   | Time when the last test was performed.                                                                                                                                                                               | 2025-01-15T14:31:19.735Z                                                                                                                                                                                             |
| `lastErrorTime`                                                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                   | Last time when a synthetic test failed.                                                                                                                                                                              | 2025-01-15T14:31:19.735Z                                                                                                                                                                                             |
| `lastResponseTime`                                                                                                                                                                                                   | *number*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | Response time from the last synthetic check in milliseconds.                                                                                                                                                         | 376                                                                                                                                                                                                                  |