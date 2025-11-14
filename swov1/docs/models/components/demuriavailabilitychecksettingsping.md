# DemUriAvailabilityCheckSettingsPing

Ping tests configuration for the URI. If omitted or set to null, ping tests are disabled.

## Example Usage

```typescript
import { DemUriAvailabilityCheckSettingsPing } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemUriAvailabilityCheckSettingsPing = {
  enabled: false,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                             | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | Enables or disables ping tests for the URI.<br/>Exactly one test type (DNS, ping, TCP, or UDP) must be enabled for a URI. | false                                                                                                                 |