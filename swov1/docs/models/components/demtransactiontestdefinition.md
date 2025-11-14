# DemTransactionTestDefinition

## Example Usage

```typescript
import { DemTransactionTestDefinition } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemTransactionTestDefinition = {
  testFrom: {
    type: "REGION",
    values: [
      "NA",
    ],
  },
  platformOptions: {
    probePlatforms: [
      "AWS",
    ],
    testFromAll: true,
  },
  outageConfiguration: {
    failingTestLocations: "all",
    consecutiveForDown: 2,
  },
  testIntervalInSeconds: 14400,
  windowSize: {
    width: 905376,
    height: 354475,
  },
  commands: [
    {
      command: "OPEN",
      target: "https://example.com",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 | Example                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `testFrom`                                                                                                                                                  | [components.DemTestFrom](../../models/components/demtestfrom.md)                                                                                            | :heavy_check_mark:                                                                                                                                          |   Configure locations of the synthetic availability test probes.<br/>  Acceptable values depend on the selected type and actual values of existing probes.  | {<br/>"type": "REGION",<br/>"values": [<br/>"NA"<br/>]<br/>}                                                                                                |
| `platformOptions`                                                                                                                                           | [components.DemTransactionTestDefinitionPlatformOptions](../../models/components/demtransactiontestdefinitionplatformoptions.md)                            | :heavy_minus_sign:                                                                                                                                          | Configure cloud platforms of the synthetic availability test probes. If omitted or set to null, any available cloud platform may be chosen.                 |                                                                                                                                                             |
| `outageConfiguration`                                                                                                                                       | [components.DemTransactionTestDefinitionOutageConfiguration](../../models/components/demtransactiontestdefinitionoutageconfiguration.md)                    | :heavy_minus_sign:                                                                                                                                          |   Default conditions when the entity is considered down.<br/>  If omitted or set to null, organization configuration will be used for this entity.          |                                                                                                                                                             |
| `testIntervalInSeconds`                                                                                                                                     | *number*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | Configure how often transaction tests should be performed. Provide a number of seconds that is one of 300, 600, 900, 1800, 3600, 7200, 14400, 43200, 86400. | 14400                                                                                                                                                       |
| `windowSize`                                                                                                                                                | [components.DemWindowSize](../../models/components/demwindowsize.md)                                                                                        | :heavy_check_mark:                                                                                                                                          | Configure the browser window size for the transaction.                                                                                                      |                                                                                                                                                             |
| `userAgent`                                                                                                                                                 | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | Configure the user agent of the browser running the transaction. If omitted or set to null, default user agent will be used.                                |                                                                                                                                                             |
| `commands`                                                                                                                                                  | [components.DemTransactionCommand](../../models/components/demtransactioncommand.md)[]                                                                      | :heavy_check_mark:                                                                                                                                          | List of commands to perform in the transaction.                                                                                                             | [<br/>{<br/>"command": "OPEN",<br/>"target": "https://example.com"<br/>}<br/>]                                                                              |