# CustomHeaders

## Example Usage

```typescript
import { CustomHeaders } from "@solarwinds/swo-sdk-typescript/models/components";

let value: CustomHeaders = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | Name of a request header. Must contain only characters allowed by RFC: a-z, A-Z, 0-9, - and _. |
| `value`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | Value of a request header.                                                                     |