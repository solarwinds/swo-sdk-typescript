# ListMetricAttributesRequest

## Example Usage

```typescript
import { ListMetricAttributesRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListMetricAttributesRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | metric name                                                                                   |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp in ISO 8601 format in UTC timezone: yyyy-MM-ddTHH:mm:ssZ                            |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp in ISO 8601 format in UTC timezone: yyyy-MM-ddTHH:mm:ssZ                            |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of items in a response page. Default varies by API.                                    |
| `skipToken`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Token for the requested page                                                                  |