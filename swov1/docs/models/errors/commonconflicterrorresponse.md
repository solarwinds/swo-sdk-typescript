# CommonConflictErrorResponse

## Example Usage

```typescript
import { CommonConflictErrorResponse } from "@solarwinds/swo-sdk-typescript/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `message`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Supporting description of the error.                                                             | Error has occurred                                                                               |
| `target`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | Indicates the invalid field.                                                                     |                                                                                                  |
| `code`                                                                                           | [errors.CommonConflictErrorResponseCode](../../models/errors/commonconflicterrorresponsecode.md) | :heavy_minus_sign:                                                                               | Uniquely identifies an error condition.                                                          | ResourceConflict                                                                                 |