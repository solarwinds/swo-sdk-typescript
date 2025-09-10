# PreGroupByMethod

Aggregation method for secondary grouping, inside individual buckets. Has to be set together with `preGroupBy`.

## Example Usage

```typescript
import { PreGroupByMethod } from "@solarwinds/swo-sdk-typescript/models/components";

let value: PreGroupByMethod = "SUM";
```

## Values

```typescript
"AVG" | "COUNT" | "MIN" | "MAX" | "SUM" | "LAST"
```