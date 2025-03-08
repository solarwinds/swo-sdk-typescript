# ListLogArchivesRequest

## Example Usage

```typescript
import { ListLogArchivesRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListLogArchivesRequest = {
  startTime: "<value>",
  endTime: "<value>",
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `startTime`                                                                                                                                 | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | List archives beginning at this time. Timestamp in ISO 8601 format in UTC timezone: yyyy-MM-ddTHH:mm:ssZ. Must be within the the last year. |
| `endTime`                                                                                                                                   | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | List archives ending at this time. Timestamp in ISO 8601 format in UTC timezone: yyyy-MM-ddTHH:mm:ssZ. Must be within the the last year.    |
| `pageSize`                                                                                                                                  | *number*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | Number of items in a response page. Default varies by API.                                                                                  |
| `skipToken`                                                                                                                                 | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | Token for the requested page                                                                                                                |