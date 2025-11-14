# DemUriAvailabilityCheckSettingsInputDns

DNS tests configuration for the URI. If omitted or set to null, DNS tests are disabled.

## Example Usage

```typescript
import { DemUriAvailabilityCheckSettingsInputDns } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemUriAvailabilityCheckSettingsInputDns = {
  enabled: false,
  nameserver: "8.8.8.8",
  port: 53,
  ipToExpect: "1.2.3.4",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Enables or disables DNS tests for the URI.<br/>Exactly one test type (DNS, ping, TCP, or UDP) must be enabled for a URI. | false                                                                                                                |
| `nameserver`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Nameserver to be used for DNS queries. Can be an IP address or domain name.                                          | 8.8.8.8                                                                                                              |
| `port`                                                                                                               | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | Port number to be used for DNS queries.                                                                              | 53                                                                                                                   |
| `ipToExpect`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Expected IP address in DNS response.                                                                                 | 1.2.3.4                                                                                                              |