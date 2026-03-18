# CommonPageInfo

## Example Usage

```typescript
import { CommonPageInfo } from "@solarwinds/swo-sdk-typescript/models/components";

let value: CommonPageInfo = {
  prevPage: "<value>",
  nextPage: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `prevPage`                                                         | *string*                                                           | :heavy_check_mark:                                                 | Token for the previous page, or empty string if on the first page. |
| `nextPage`                                                         | *string*                                                           | :heavy_check_mark:                                                 | Token for the next page, or empty string if on the last page.      |