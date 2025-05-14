# MetricsGrouping

## Example Usage

```typescript
import { MetricsGrouping } from "@solarwinds/swo-sdk-typescript/models/components";

let value: MetricsGrouping = {
  attributes: [
    {
      key: "<key>",
      value: "<value>",
    },
  ],
  measurements: [
    {
      time: new Date("2025-10-01T01:48:52.101Z"),
      value: 4001.92,
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `attributes`                                                                     | [components.CommonKeyValuePair](../../models/components/commonkeyvaluepair.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `measurements`                                                                   | [components.MetricsMeasurement](../../models/components/metricsmeasurement.md)[] | :heavy_check_mark:                                                               | An empty list indicates no data points are available.                            |