# UpdateWebsiteRequest

## Example Usage

```typescript
import { UpdateWebsiteRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: UpdateWebsiteRequest = {
  entityId: "<id>",
  demWebsite: {
    name: "solarwinds.com",
    url: "https://www.solarwinds.com",
    availabilityCheckSettings: {
      platformOptions: {
        probePlatforms: [
          "AWS",
        ],
        testFromAll: true,
      },
      testFrom: {
        type: "REGION",
        values: [
          "NA",
        ],
      },
      testIntervalInSeconds: 14400,
      outageConfiguration: {
        failingTestLocations: "all",
        consecutiveForDown: 2,
      },
      checkForString: {
        operator: "CONTAINS",
        value: "string",
      },
      protocols: [
        "HTTP",
        "HTTPS",
      ],
      ssl: {
        enabled: true,
        daysPriorToExpiration: 7,
        ignoreIntermediateCertificates: true,
      },
      customHeaders: [
        {
          name: "string",
          value: "string",
        },
      ],
      allowInsecureRenegotiation: true,
      postData: "{\"example\": \"value\"}",
    },
    tags: [
      {
        key: "environment",
        value: "production",
      },
    ],
    rum: {
      apdexTimeInSeconds: 4,
      spa: true,
    },
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `entityId`                                                     | *string*                                                       | :heavy_check_mark:                                             | Entity ID.                                                     |
| `demWebsite`                                                   | [components.DemWebsite](../../models/components/demwebsite.md) | :heavy_check_mark:                                             | The updated website monitoring configuration                   |