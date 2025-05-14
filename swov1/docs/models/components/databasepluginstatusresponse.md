# DatabasePluginStatusResponse

## Example Usage

```typescript
import { DatabasePluginStatusResponse } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DatabasePluginStatusResponse = {
  plugins: [
    {
      pluginName: "<value>",
      status: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `plugins`                                                                            | [components.DatabasePluginStatus](../../models/components/databasepluginstatus.md)[] | :heavy_check_mark:                                                                   | Status of plugin(s) observing database server                                        |