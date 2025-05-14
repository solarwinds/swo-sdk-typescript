# DatabasePluginStatus

## Example Usage

```typescript
import { DatabasePluginStatus } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DatabasePluginStatus = {
  pluginName: "<value>",
  status: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `pluginName`                               | *string*                                   | :heavy_check_mark:                         | Name of plugin observing database server   |
| `status`                                   | *string*                                   | :heavy_check_mark:                         | Status of plugin observing database server |