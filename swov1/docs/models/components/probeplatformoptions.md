# ProbePlatformOptions

## Example Usage

```typescript
import { ProbePlatformOptions } from "@solarwinds/swo-sdk-typescript/models/components";

let value: ProbePlatformOptions = {
  probePlatforms: [
    "GOOGLE_CLOUD",
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `probePlatforms`                                                       | [components.ProbePlatform](../../models/components/probeplatform.md)[] | :heavy_check_mark:                                                     | Cloud platforms hosting synthetic probes.                              |
| `testFromAll`                                                          | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |