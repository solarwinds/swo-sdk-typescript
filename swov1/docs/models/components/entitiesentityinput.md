# EntitiesEntityInput

## Example Usage

```typescript
import { EntitiesEntityInput } from "@solarwinds/swo-sdk-typescript/models/components";

let value: EntitiesEntityInput = {
  displayName: "SyslogTest",
  tags: {
    "gg.tk.token": "test",
    "kfi.tk.token": "qa-test",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Entity display name / alias. This value is equal to name unless it is explicitly overridden.       | SyslogTest                                                                                         |
| `tags`                                                                                             | Record<string, *string*>                                                                           | :heavy_check_mark:                                                                                 | Entity tags. Tag is a key-value pair, where there may be only a single tag value for the same key. | {<br/>"gg.tk.token": "test",<br/>"kfi.tk.token": "qa-test"<br/>}                                   |