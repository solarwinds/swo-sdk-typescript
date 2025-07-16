# DemCustomHeaders

## Example Usage

```typescript
import { DemCustomHeaders } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemCustomHeaders = {
  name: "string",
  value: "string",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | Name of a request header. Must contain only characters allowed by RFC: a-z, A-Z, 0-9, - and _. | string                                                                                         |
| `value`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | Value of a request header.                                                                     | string                                                                                         |