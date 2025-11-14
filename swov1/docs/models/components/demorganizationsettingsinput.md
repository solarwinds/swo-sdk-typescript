# DemOrganizationSettingsInput

## Example Usage

```typescript
import { DemOrganizationSettingsInput } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemOrganizationSettingsInput = {
  availabilityOutageConfiguration: {
    failingTestLocations: "all",
    consecutiveForDown: 2,
  },
  transactionOutageConfiguration: {
    failingTestLocations: "all",
    consecutiveForDown: 2,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `availabilityOutageConfiguration`                                                      | [components.DemOutageConfiguration](../../models/components/demoutageconfiguration.md) | :heavy_minus_sign:                                                                     | Configure outage conditions for Website/URI entities.                                  |
| `transactionOutageConfiguration`                                                       | [components.DemOutageConfiguration](../../models/components/demoutageconfiguration.md) | :heavy_minus_sign:                                                                     | Configure outage conditions for Synthetic Transaction entities.                        |