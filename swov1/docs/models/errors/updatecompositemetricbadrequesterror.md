# UpdateCompositeMetricBadRequestError

The server could not understand the request due to invalid syntax.

## Example Usage

```typescript
import { UpdateCompositeMetricBadRequestError } from "@solarwinds/swo-sdk-typescript/models/errors";

// No examples available for this model
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `code`                                  | *number*                                | :heavy_check_mark:                      | HTTP status code as defined in RFC 2817 | 404                                     |
| `message`                               | *string*                                | :heavy_check_mark:                      | Supporting description of the error     | Entity does not exist                   |
| `target`                                | *string*                                | :heavy_minus_sign:                      | N/A                                     |                                         |