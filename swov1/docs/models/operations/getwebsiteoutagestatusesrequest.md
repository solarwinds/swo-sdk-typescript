# GetWebsiteOutageStatusesRequest

## Example Usage

```typescript
import { GetWebsiteOutageStatusesRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: GetWebsiteOutageStatusesRequest = {
  entityId: "<id>",
  startTime: new Date("2025-07-08T02:07:38.991Z"),
  endTime: new Date("2025-11-27T08:35:41.481Z"),
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