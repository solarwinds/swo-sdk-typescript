# DemUriAvailabilityCheckSettingsInputUdp

UDP tests configuration for the URI. If omitted or set to null, UDP tests are disabled.

## Example Usage

```typescript
import { DemUriAvailabilityCheckSettingsInputUdp } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemUriAvailabilityCheckSettingsInputUdp = {
  enabled: false,
  port: 8888,
  stringToSend:
    "GET / HTTP/1.1\r\nHost: solarwinds.com\r\nConnection: close\r\n\r\n",
  stringToExpect: "HTTP/1.1 200 OK",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Enables or disables UDP tests for the URI.<br/>Exactly one test type (DNS, ping, TCP, or UDP) must be enabled for a URI. | false                                                                                                                |
| `port`                                                                                                               | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | Port number to be used in UDP tests.                                                                                 | 8888                                                                                                                 |
| `stringToSend`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | String to send in the body of a UDP request.                                                                         | GET / HTTP/1.1<br/>Host: solarwinds.com<br/>Connection: close<br/><br/>                                          |
| `stringToExpect`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | String to search for in the body of a UDP response.                                                                  | HTTP/1.1 200 OK                                                                                                      |