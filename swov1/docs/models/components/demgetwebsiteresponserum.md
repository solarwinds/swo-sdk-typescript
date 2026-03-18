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

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `apdexTimeInSeconds`                                                  | *number*                                                              | :heavy_minus_sign:                                                    | Apdex time threshold in seconds for performance satisfaction scoring. |
| `snippet`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | JavaScript snippet to embed for real user monitoring.                 |
| `spa`                                                                 | *boolean*                                                             | :heavy_check_mark:                                                    | Whether the website is a single-page application (SPA).               |