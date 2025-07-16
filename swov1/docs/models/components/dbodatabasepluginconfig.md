# DboDatabasePluginConfig

## Example Usage

```typescript
import { DboDatabasePluginConfig } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DboDatabasePluginConfig = {
  pluginName: "<value>",
  configOptions: [],
  dbConnOptions: [
    {
      key: "<key>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `pluginName`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | Name of plugin observing database server                                         |
| `configOptions`                                                                  | [components.CommonKeyValuePair](../../models/components/commonkeyvaluepair.md)[] | :heavy_check_mark:                                                               | Configuration of plugin observing database server                                |
| `dbConnOptions`                                                                  | [components.CommonKeyValuePair](../../models/components/commonkeyvaluepair.md)[] | :heavy_check_mark:                                                               | Database connection options of plugin observing database server                  |