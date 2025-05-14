# Ping

  Use this field to configure ping tests for the URI. If omitted or set to null, ping tests will be disabled.
  One test type (ping or TCP) must be enabled for a URI.

## Example Usage

```typescript
import { Ping } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: Ping = {
  enabled: false,
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                                                           | *boolean*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                  | Use this field to configure ping tests for the URI. If omitted or set to false, ping tests will be disabled.<br/>One test type (ping or TCP) must be enabled for a URI. |