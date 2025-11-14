# Healthscore

## Example Usage

```typescript
import { Healthscore } from "@solarwinds/swo-sdk-typescript/models/components";

let value: Healthscore = {
  score: 100,
  category: "good",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `score`                                                    | *number*                                                   | :heavy_minus_sign:                                         | Health score value from 0 to 100.                          |
| `category`                                                 | [components.Category](../../models/components/category.md) | :heavy_minus_sign:                                         | Health Score category label.                               |