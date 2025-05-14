# Tcp

  Use this field to configure TCP tests for the URI. If omitted or set to null, TCP tests will be disabled.
  One test type (ping or TCP) must be enabled for a URI.

## Example Usage

```typescript
import { Tcp } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: Tcp = {
  enabled: false,
  port: 61671,
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                                                           | *boolean*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                  | Use this field to configure TCP tests for the URI. If omitted or set to false, TCP tests will be disabled.<br/>One test type (ping or TCP) must be enabled for a URI.   |
| `port`                                                                                                                                                              | *number*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | Port number to be used in TCP tests.                                                                                                                                |
| `stringToSend`                                                                                                                                                      | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | Use this field to specify a string to send in the body of a TCP request.                                                                                            |
| `stringToExpect`                                                                                                                                                    | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | Use this field to specify a string to search for in the body of a TCP response.                                                                                     |