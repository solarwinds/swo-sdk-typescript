# MonitoringOptions

Defines which monitoring features are enabled for a website.

## Example Usage

```typescript
import { MonitoringOptions } from "@solarwinds/swo-sdk-typescript/models/components";

let value: MonitoringOptions = {
  isAvailabilityActive: true,
  isRumActive: false,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `isAvailabilityActive`                            | *boolean*                                         | :heavy_check_mark:                                | True if the availability monitoring is active.    | true                                              |
| `isRumActive`                                     | *boolean*                                         | :heavy_check_mark:                                | True if the real user monitoring (RUM) is active. | false                                             |