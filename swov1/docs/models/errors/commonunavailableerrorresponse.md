# CommonUnavailableErrorResponse

## Example Usage

```typescript
import { CommonUnavailableErrorResponse } from "@solarwinds/swo-sdk-typescript/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `message`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | Supporting description of the error.                                                                   | Error has occurred                                                                                     |
| `code`                                                                                                 | [errors.CommonUnavailableErrorResponseCode](../../models/errors/commonunavailableerrorresponsecode.md) | :heavy_minus_sign:                                                                                     | Uniquely identifies an error condition.                                                                | ServiceUnavailable                                                                                     |