# UpdateTransactionRequest

## Example Usage

```typescript
import { UpdateTransactionRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: UpdateTransactionRequest = {
  entityId: "<id>",
  demTransaction: {
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
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `entityId`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `demTransaction`                                                       | [components.DemTransaction](../../models/components/demtransaction.md) | :heavy_check_mark:                                                     | Update transaction monitoring configuration                            |