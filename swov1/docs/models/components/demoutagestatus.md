# DemOutageStatus

## Example Usage

```typescript
import { DemOutageStatus } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemOutageStatus = {
  startTime: new Date("2025-01-15T14:31:19.735Z"),
  endTime: new Date("2025-01-15T14:31:19.735Z"),
  status: "up",
  resultId: "result-67890",
  analysisId: "analysis-12345",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the start of the outage                                                          | 2025-01-15T14:31:19.735Z                                                                      |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the end of the outage                                                            | 2025-01-15T14:31:19.735Z                                                                      |
| `status`                                                                                      | [components.DemOutageStatusStatus](../../models/components/demoutagestatusstatus.md)          | :heavy_check_mark:                                                                            | Status of the outage                                                                          | up                                                                                            |
| `resultId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Reference to the result                                                                       | result-67890                                                                                  |
| `analysisId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Reference to the root cause analysis                                                          | analysis-12345                                                                                |