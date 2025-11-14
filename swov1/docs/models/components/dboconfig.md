# DboConfig

## Example Usage

```typescript
import { DboConfig } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DboConfig = {
  configOptions: [
    {
      key: "<key>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `configOptions`                                                                    | [components.CommonKeyValuePair](../../models/components/commonkeyvaluepair.md)[]   | :heavy_check_mark:                                                                 | Organization-level configuration options for database observability agents/plugins |