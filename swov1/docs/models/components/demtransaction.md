# DemTransaction

## Example Usage

```typescript
import { DemTransaction } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemTransaction = {
  name: "Solarwinds",
  description: "Opens Solarwinds homepage",
  testDefinition: {
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
  },
  tags: [
    {
      key: "environment",
      value: "production",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                               | Type                                                                                                                                                                                                                | Required                                                                                                                                                                                                            | Description                                                                                                                                                                                                         | Example                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | Name of the transaction, which must be unique within the organization. The name must not contain any control characters, any white space other than space (U+0020), or any consecutive, leading or trailing spaces. | Solarwinds                                                                                                                                                                                                          |
| `description`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                  | Description of the transaction.                                                                                                                                                                                     | Opens Solarwinds homepage                                                                                                                                                                                           |
| `relatedEntityId`                                                                                                                                                                                                   | *string*                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                  | Id of a related entity to which the transaction is connected.                                                                                                                                                       |                                                                                                                                                                                                                     |
| `testDefinition`                                                                                                                                                                                                    | [components.DemTransactionTestDefinition](../../models/components/demtransactiontestdefinition.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                  | Test definition for the transaction.                                                                                                                                                                                |                                                                                                                                                                                                                     |
| `tags`                                                                                                                                                                                                              | [components.CommonTag](../../models/components/commontag.md)[]                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                  | Entity tags. Tag is a key-value pair, where there may be only single tag value for the same key.                                                                                                                    |                                                                                                                                                                                                                     |