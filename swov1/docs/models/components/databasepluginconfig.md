# DatabasePluginConfig

## Example Usage

```typescript
import { DatabasePluginConfig } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DatabasePluginConfig = {
  pluginName: "<value>",
  configOptions: [],
  dbConnOptions: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `pluginName`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | Name of plugin observing database server                                         |
| `configOptions`                                                                  | [components.CommonKeyValuePair](../../models/components/commonkeyvaluepair.md)[] | :heavy_check_mark:                                                               | Configuration of plugin observing database server                                |
| `dbConnOptions`                                                                  | [components.CommonKeyValuePair](../../models/components/commonkeyvaluepair.md)[] | :heavy_check_mark:                                                               | Database connection options of plugin observing database server                  |