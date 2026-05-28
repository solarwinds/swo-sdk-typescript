# ListMetricsForEntityTypeRequest

## Example Usage

```typescript
import { ListMetricsForEntityTypeRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricsForEntityTypeRequest = {
  type: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Entity type for which metrics are retrieved. Value is case-sensitive.                         |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp in ISO 8601 format in UTC timezone: yyyy-MM-ddTHH:mm:ssZ                            |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp in ISO 8601 format in UTC timezone: yyyy-MM-ddTHH:mm:ssZ                            |