# ListLogArchivesResponse

## Example Usage

```typescript
import { ListLogArchivesResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListLogArchivesResponse = {
  result: {
    logArchives: [
      {
        id: "logs/138723/dt=2024-01-23/2024-01-23-08.json.gz",
        name: "2024-01-23-08.json.gz",
        downloadUrl:
          "https://ssp-log-archives.s3.amazonaws.com/logs/138723/dt%3D2024-01-23/2024-01-23-08.json.gz?X-Amz-Security-Token=IQ...",
        archivedTimestamp: "1706020985",
        archiveSize: 817226354,
      },
    ],
    pageInfo: {
      prevPage: "<value>",
      nextPage: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result`                                                                                         | [operations.ListLogArchivesResponseBody](../../models/operations/listlogarchivesresponsebody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |