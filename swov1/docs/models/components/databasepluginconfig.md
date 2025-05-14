# DatabasePluginConfig

## Example Usage

```typescript
import { DatabasePluginConfig } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DatabasePluginConfig = {
  pluginName: "<value>",
  config: [
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
| `config`                                                                         | [components.CommonKeyValuePair](../../models/components/commonkeyvaluepair.md)[] | :heavy_check_mark:                                                               | Configuration of plugin observing database server                                |