# HealthState

Health state of the entity.

## Example Usage

```typescript
import { HealthState } from "@solarwinds/swo-sdk-typescript/models/components";

let value: HealthState = {
  state: "GOOD",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `state`                                              | [components.State](../../models/components/state.md) | :heavy_minus_sign:                                   | Health state of the entity.                          |