# DemUriAvailabilityCheckSettingsInput

## Example Usage

```typescript
import { DemUriAvailabilityCheckSettingsInput } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemUriAvailabilityCheckSettingsInput = {
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
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            | Example                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `platformOptions`                                                                                                                                                      | [components.DemUriAvailabilityCheckSettingsInputPlatformOptions](../../models/components/demuriavailabilitychecksettingsinputplatformoptions.md)                       | :heavy_minus_sign:                                                                                                                                                     | Configure cloud platforms of the synthetic availability test probes. If omitted or set to null, no particular cloud platform will be enforced.                         |                                                                                                                                                                        |
| `testFrom`                                                                                                                                                             | [components.DemTestFrom](../../models/components/demtestfrom.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                     |   Configure locations of the synthetic availability test probes.<br/>  Acceptable values depend on the selected type and actual values of existing probes.             | {<br/>"type": "REGION",<br/>"values": [<br/>"NA"<br/>]<br/>}                                                                                                           |
| `testIntervalInSeconds`                                                                                                                                                | *number*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | Configure how often availability tests should be performed. Provide a number of seconds that is one of 60, 300, 600, 900, 1800, 3600, 7200, 14400.                     | 14400                                                                                                                                                                  |
| `outageConfiguration`                                                                                                                                                  | [components.DemUriAvailabilityCheckSettingsInputOutageConfiguration](../../models/components/demuriavailabilitychecksettingsinputoutageconfiguration.md)               | :heavy_minus_sign:                                                                                                                                                     |   Default conditions when the entity is considered down.<br/>  If omitted or set to null, organization configuration will be used for this entity.                     |                                                                                                                                                                        |
| `ping`                                                                                                                                                                 | [components.DemUriAvailabilityCheckSettingsInputPing](../../models/components/demuriavailabilitychecksettingsinputping.md)                                             | :heavy_minus_sign:                                                                                                                                                     |   Use this field to configure ping tests for the URI. If omitted or set to null, ping tests will be disabled.<br/>  One test type (ping or TCP) must be enabled for a URI. |                                                                                                                                                                        |
| `tcp`                                                                                                                                                                  | [components.DemUriAvailabilityCheckSettingsInputTcp](../../models/components/demuriavailabilitychecksettingsinputtcp.md)                                               | :heavy_minus_sign:                                                                                                                                                     |   Use this field to configure TCP tests for the URI. If omitted or set to null, TCP tests will be disabled.<br/>  One test type (ping or TCP) must be enabled for a URI. |                                                                                                                                                                        |