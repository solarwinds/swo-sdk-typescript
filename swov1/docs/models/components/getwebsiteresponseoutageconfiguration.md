# GetWebsiteResponseOutageConfiguration

  Default conditions when the entity is considered down.
  If omitted or set to null, organization configuration will be used for this entity.

## Example Usage

```typescript
import { GetWebsiteResponseOutageConfiguration } from "@solarwinds/swo-sdk-typescript/models/components";

let value: GetWebsiteResponseOutageConfiguration = {
  failingTestLocations: "all",
  consecutiveForDown: 2,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `failingTestLocations`                                                                                                 | [components.GetWebsiteResponseFailingTestLocations](../../models/components/getwebsiteresponsefailingtestlocations.md) | :heavy_check_mark:                                                                                                     | How many locations must report a failure for an entity to be considered down.                                          | all                                                                                                                    |
| `consecutiveForDown`                                                                                                   | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | Number of consecutive failing tests for an entity to be considered down.                                               | 2                                                                                                                      |