# DemTestResult

## Example Usage

```typescript
import { DemTestResult } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemTestResult = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `time`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of result                                                                           | 2025-01-15T14:31:19.735Z                                                                      |
| `probe`                                                                                       | [components.DemProbe](../../models/components/demprobe.md)                                    | :heavy_check_mark:                                                                            | Probe that produced the result                                                                |                                                                                               |
| `responseTime`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | Response time in milliseconds                                                                 | 376                                                                                           |
| `status`                                                                                      | [components.DemTestResultStatus](../../models/components/demtestresultstatus.md)              | :heavy_check_mark:                                                                            | Status of the test result                                                                     | up                                                                                            |
| `phase`                                                                                       | [components.Phase](../../models/components/phase.md)                                          | :heavy_minus_sign:                                                                            | Indicates at which phase of the failure occurred                                              | connection                                                                                    |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Short reason for failure                                                                      | Connection timeout                                                                            |
| `message`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Longer reason for failure                                                                     | Connection timeout occurred while attempting to connect to the target server                  |
| `analysisId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Reference to the root cause analysis                                                          | analysis-12345                                                                                |
| `validationsId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | Reference to the validation                                                                   | validation-67890                                                                              |