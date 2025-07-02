# DatabasePluginConfigResponse

## Example Usage

```typescript
import { DatabasePluginConfigResponse } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DatabasePluginConfigResponse = {
  pluginConfig: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `pluginConfig`                                                                       | [components.DatabasePluginConfig](../../models/components/databasepluginconfig.md)[] | :heavy_check_mark:                                                                   | Configuration of plugin(s) observing database server                                 |