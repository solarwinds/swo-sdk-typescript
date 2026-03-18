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

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `apdexTimeInSeconds`                                                  | *number*                                                              | :heavy_minus_sign:                                                    | Apdex time threshold in seconds for performance satisfaction scoring. |
| `spa`                                                                 | *boolean*                                                             | :heavy_check_mark:                                                    | Whether the website is a single-page application (SPA).               |