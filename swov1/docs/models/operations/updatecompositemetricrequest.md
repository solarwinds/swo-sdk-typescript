# UpdateCompositeMetricRequest

## Example Usage

```typescript
import { UpdateCompositeMetricRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: UpdateCompositeMetricRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The metric name                                                                      |
| `updateCompositeMetric`                                                              | [components.UpdateCompositeMetric](../../models/components/updatecompositemetric.md) | :heavy_check_mark:                                                                   | Metric properties to update                                                          |