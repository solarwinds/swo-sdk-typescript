# DboDatabasePluginConfigResponse

## Example Usage

```typescript
import { DboDatabasePluginConfigResponse } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DboDatabasePluginConfigResponse = {
  pluginConfig: [
    {
      pluginName: "<value>",
      configOptions: [],
      dbConnOptions: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `pluginConfig`                                                                             | [components.DboDatabasePluginConfig](../../models/components/dbodatabasepluginconfig.md)[] | :heavy_check_mark:                                                                         | Configuration of plugin(s) observing database server                                       |