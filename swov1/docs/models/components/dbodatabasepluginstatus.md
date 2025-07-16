# DboDatabasePluginStatus

## Example Usage

```typescript
import { DboDatabasePluginStatus } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DboDatabasePluginStatus = {
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