# DemGetWebsiteResponseRum

Use this field to configure real user monitoring (RUM) for the website.
You are required to configure at least availability monitoring or real user monitoring to be able to create website.

## Example Usage

```typescript
import { DemGetWebsiteResponseRum } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemGetWebsiteResponseRum = {
  apdexTimeInSeconds: 4,
  snippet: "string",
  spa: true,
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `apdexTimeInSeconds` | *number*             | :heavy_minus_sign:   | N/A                  |
| `snippet`            | *string*             | :heavy_minus_sign:   | N/A                  |
| `spa`                | *boolean*            | :heavy_check_mark:   | N/A                  |