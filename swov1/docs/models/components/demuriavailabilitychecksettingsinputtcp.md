# DemUriAvailabilityCheckSettingsInputTcp

TCP tests configuration for the URI. If omitted or set to null, TCP tests are disabled.

## Example Usage

```typescript
import { DemUriAvailabilityCheckSettingsInputTcp } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemUriAvailabilityCheckSettingsInputTcp = {
  enabled: true,
  port: 443,
  stringToSend: "GET / HTTP/1.1\r\n"
    + "Host: solarwinds.com\r\n"
    + "Connection: close\r\n"
    + "\r\n"
    + "",
  stringToExpect: "HTTP/1.1 200 OK",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Enables or disables TCP tests for the URI.<br/>Exactly one test type (DNS, ping, TCP, or UDP) must be enabled for a URI. | true                                                                                                                 |
| `port`                                                                                                               | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | Port number to be used in TCP tests.                                                                                 | 443                                                                                                                  |
| `stringToSend`                                                                                                       | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | String to send in the body of a TCP request.                                                                         | GET / HTTP/1.1<br/>Host: solarwinds.com<br/>Connection: close<br/><br/>                                          |
| `stringToExpect`                                                                                                     | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | String to search for in the body of a TCP response.                                                                  | HTTP/1.1 200 OK                                                                                                      |