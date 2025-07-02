# UriAvailabilityCheckSettingsInputTcp

  Use this field to configure TCP tests for the URI. If omitted or set to null, TCP tests will be disabled.
  One test type (ping or TCP) must be enabled for a URI.

## Example Usage

```typescript
import { UriAvailabilityCheckSettingsInputTcp } from "@solarwinds/swo-sdk-typescript/models/components";

let value: UriAvailabilityCheckSettingsInputTcp = {
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

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         | Example                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                                                           | *boolean*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                  | Use this field to configure TCP tests for the URI. If omitted or set to false, TCP tests will be disabled.<br/>One test type (ping or TCP) must be enabled for a URI.   | true                                                                                                                                                                |
| `port`                                                                                                                                                              | *number*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | Port number to be used in TCP tests.                                                                                                                                | 443                                                                                                                                                                 |
| `stringToSend`                                                                                                                                                      | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | Use this field to specify a string to send in the body of a TCP request.                                                                                            | GET / HTTP/1.1<br/>Host: solarwinds.com<br/>Connection: close<br/><br/>                                                                                         |
| `stringToExpect`                                                                                                                                                    | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | Use this field to specify a string to search for in the body of a TCP response.                                                                                     | HTTP/1.1 200 OK                                                                                                                                                     |