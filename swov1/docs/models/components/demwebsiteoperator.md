# DemWebsiteOperator

Defines whether the check should pass only when the string is present on the page (CONTAINS) or only when it is absent (DOES_NOT_CONTAIN).

## Example Usage

```typescript
import { DemWebsiteOperator } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemWebsiteOperator = "CONTAINS";
```

## Values

```typescript
"CONTAINS" | "DOES_NOT_CONTAIN"
```