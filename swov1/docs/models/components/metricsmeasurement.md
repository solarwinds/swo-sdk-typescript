# MetricsMeasurement

## Example Usage

```typescript
import { MetricsMeasurement } from "@solarwinds/swo-sdk-typescript/models/components";

let value: MetricsMeasurement = {
  time: new Date("2025-09-10T19:22:46.649Z"),
  value: 4234.22,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `time`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time of the measurement.                                                                      |
| `value`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Value of the measurement.                                                                     |