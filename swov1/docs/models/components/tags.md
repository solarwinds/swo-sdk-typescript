# Tags

Tags to associate with the token.

## Example Usage

```typescript
import { Tags } from "@solarwinds/swo-sdk-typescript/models/components";

let value: Tags = {
  server: "<value>",
  tagWithoutValue: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `server`             | *string*             | :heavy_check_mark:   | Server tag value.    |
| `tagWithoutValue`    | *string*             | :heavy_check_mark:   | Tag without a value. |