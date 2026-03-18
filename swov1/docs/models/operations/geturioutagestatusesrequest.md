# GetUriOutageStatusesRequest

## Example Usage

```typescript
import { GetUriOutageStatusesRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: GetUriOutageStatusesRequest = {
  entityId: "<id>",
  startTime: new Date("2026-02-27T10:29:47.155Z"),
  endTime: new Date("2024-08-09T01:09:39.647Z"),
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `entityId`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Entity ID.                                                                                                   |
| `startTime`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Start of timespan to get results for, inclusive                                                              |
| `endTime`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | End of timespan to get results for, exclusive                                                                |
| `direction`                                                                                                  | [components.DemSortDirectionParam](../../models/components/demsortdirectionparam.md)                         | :heavy_minus_sign:                                                                                           | sort direction: 'backward' and 'tail' both sort from oldest to newest, 'forward' sorts from newest to oldest |
| `pageSize`                                                                                                   | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Number of items in a response page. Default varies by API.                                                   |
| `skipToken`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Token for the requested page.                                                                                |