# OutageConfiguration

## Example Usage

```typescript
import { OutageConfiguration } from "@solarwinds/swo-sdk-typescript/models/components";

let value: OutageConfiguration = {
  failingTestLocations: "all",
  consecutiveForDown: 2,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `failingTestLocations`                                                                                                   | [components.OutageConfigurationFailingTestLocations](../../models/components/outageconfigurationfailingtestlocations.md) | :heavy_check_mark:                                                                                                       | How many locations must report a failure for an entity to be considered down.                                            | all                                                                                                                      |
| `consecutiveForDown`                                                                                                     | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Number of consecutive failing tests for an entity to be considered down.                                                 | 2                                                                                                                        |