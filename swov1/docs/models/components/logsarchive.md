# LogsArchive

## Example Usage

```typescript
import { LogsArchive } from "@solarwinds/swo-sdk-typescript/models/components";

let value: LogsArchive = {
  id: "logs/138723/dt=2024-01-23/2024-01-23-08.json.gz",
  name: "2024-01-23-08.json.gz",
  downloadUrl:
    "https://ssp-log-archives.s3.amazonaws.com/logs/138723/dt%3D2024-01-23/2024-01-23-08.json.gz?X-Amz-Security-Token=IQ...",
  archivedTimestamp: "1706020985",
  archiveSize: 817226354,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The unique identifier of the log archive                                                                               | logs/138723/dt=2024-01-23/2024-01-23-08.json.gz                                                                        |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The name of the log archive                                                                                            | 2024-01-23-08.json.gz                                                                                                  |
| `downloadUrl`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The download URL of the log archive                                                                                    | https://ssp-log-archives.s3.amazonaws.com/logs/138723/dt%3D2024-01-23/2024-01-23-08.json.gz?X-Amz-Security-Token=IQ... |
| `archivedTimestamp`                                                                                                    | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The timestamp of when the log archive was created in epoch time                                                        | 1706020985                                                                                                             |
| `archiveSize`                                                                                                          | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The size of the archive                                                                                                | 817226354                                                                                                              |