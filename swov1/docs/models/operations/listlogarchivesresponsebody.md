# ListLogArchivesResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ListLogArchivesResponseBody } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListLogArchivesResponseBody = {
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
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `logArchives`                                                          | [components.LogsArchive](../../models/components/logsarchive.md)[]     | :heavy_check_mark:                                                     | N/A                                                                    |
| `pageInfo`                                                             | [components.CommonPageInfo](../../models/components/commonpageinfo.md) | :heavy_check_mark:                                                     | N/A                                                                    |