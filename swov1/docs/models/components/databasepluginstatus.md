# DatabasePluginStatus

## Example Usage

```typescript
import { DatabasePluginStatus } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DatabasePluginStatus = {
  pluginName: "<value>",
  deploymentStatus: "<value>",
  healthStatus: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `pluginName`                                          | *string*                                              | :heavy_check_mark:                                    | Name of plugin observing database server              |
| `deploymentStatus`                                    | *string*                                              | :heavy_check_mark:                                    | Deployment Status of plugin observing database server |
| `healthStatus`                                        | *string*                                              | :heavy_check_mark:                                    | Health Status of plugin observing database server     |