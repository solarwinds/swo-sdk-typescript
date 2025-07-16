# DemWebsiteRum

    Use this field to configure real user monitoring (RUM) for the website.
    You are required to configure at least availability monitoring or real user monitoring to be able to create website.

## Example Usage

```typescript
import { DemWebsiteRum } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemWebsiteRum = {
  apdexTimeInSeconds: 4,
  spa: true,
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `apdexTimeInSeconds` | *number*             | :heavy_minus_sign:   | N/A                  |
| `spa`                | *boolean*            | :heavy_check_mark:   | N/A                  |