# DboDatabasePluginStatusResponse

## Example Usage

```typescript
import { DboDatabasePluginStatusResponse } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DboDatabasePluginStatusResponse = {
  plugins: [],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `plugins`                                                                                  | [components.DboDatabasePluginStatus](../../models/components/dbodatabasepluginstatus.md)[] | :heavy_check_mark:                                                                         | Status of plugin(s) observing database server                                              |