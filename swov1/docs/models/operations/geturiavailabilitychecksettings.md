# GetUriAvailabilityCheckSettings

Availability tests configuration for the URI.

## Example Usage

```typescript
import { GetUriAvailabilityCheckSettings } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: GetUriAvailabilityCheckSettings = {
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
    consecutiveForDown: 3,
  },
  ping: {
    enabled: true,
  },
  protocol: "PING",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            | Example                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `platformOptions`                                                                                                                                                      | [operations.GetUriPlatformOptions](../../models/operations/geturiplatformoptions.md)                                                                                   | :heavy_minus_sign:                                                                                                                                                     | Configure cloud platforms of the synthetic availability test probes. If omitted or set to null, no particular cloud platform will be enforced.                         |                                                                                                                                                                        |
| `testFrom`                                                                                                                                                             | [components.TestFrom](../../models/components/testfrom.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                     |   Configure locations of the synthetic availability test probes.<br/>  Acceptable values depend on the selected type and actual values of existing probes.             | {<br/>"type": "REGION",<br/>"values": [<br/>"NA"<br/>]<br/>}                                                                                                           |
| `testIntervalInSeconds`                                                                                                                                                | *number*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | Configure how often availability tests should be performed. Provide a number of seconds that is one of 60, 300, 600, 900, 1800, 3600, 7200, 14400.                     |                                                                                                                                                                        |
| `outageConfiguration`                                                                                                                                                  | [operations.GetUriOutageConfiguration](../../models/operations/geturioutageconfiguration.md)                                                                           | :heavy_minus_sign:                                                                                                                                                     |   Default conditions when the entity is considered down.<br/>  If omitted or set to null, organization configuration will be used for this entity.                     |                                                                                                                                                                        |
| `ping`                                                                                                                                                                 | [operations.Ping](../../models/operations/ping.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                     |   Use this field to configure ping tests for the URI. If omitted or set to null, ping tests will be disabled.<br/>  One test type (ping or TCP) must be enabled for a URI. |                                                                                                                                                                        |
| `tcp`                                                                                                                                                                  | [operations.Tcp](../../models/operations/tcp.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                     |   Use this field to configure TCP tests for the URI. If omitted or set to null, TCP tests will be disabled.<br/>  One test type (ping or TCP) must be enabled for a URI. |                                                                                                                                                                        |
| `protocol`                                                                                                                                                             | [operations.Protocol](../../models/operations/protocol.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                     | Protocol used to test availability of the URI.                                                                                                                         |                                                                                                                                                                        |