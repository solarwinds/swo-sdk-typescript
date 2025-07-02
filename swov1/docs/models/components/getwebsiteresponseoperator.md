# GetWebsiteResponseOperator

Defines whether the check should pass only when the string is present on the page (CONTAINS) or only when it is absent (DOES_NOT_CONTAIN).

## Example Usage

```typescript
import { GetWebsiteResponseOperator } from "@solarwinds/swo-sdk-typescript/models/components";

let value: GetWebsiteResponseOperator = "CONTAINS";
```

## Values

```typescript
"CONTAINS" | "DOES_NOT_CONTAIN"
```