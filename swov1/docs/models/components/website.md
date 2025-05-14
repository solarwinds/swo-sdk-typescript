# Website

## Example Usage

```typescript
import { Website } from "@solarwinds/swo-sdk-typescript/models/components";

let value: Website = {
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
      key: "string",
      value: "string",
    },
  ],
  rum: {
    apdexTimeInSeconds: 4,
    spa: true,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                | Description                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                      | Name of the website, which must be unique within the organization. The website must also not contain any control characters, any white space other than space (U+0020), or any consecutive, leading or trailing spaces. |
| `url`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                      | URL of the website. Must be a valid URL with no leading or trailing white space. Must not contain invalid port number (>65535).                                                                                         |
| `availabilityCheckSettings`                                                                                                                                                                                             | [components.AvailabilityCheckSettings](../../models/components/availabilitychecksettings.md)                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                      | Use this field to configure availability tests for the website.                                                                                                                                                         |
| `tags`                                                                                                                                                                                                                  | [components.Tag](../../models/components/tag.md)[]                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                      | Entity tags. Tag is a key-value pair, where there may be only single tag value for the same key.                                                                                                                        |
| `rum`                                                                                                                                                                                                                   | [components.Rum](../../models/components/rum.md)                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                      |     Use this field to configure real user monitoring (RUM) for the website.<br/>    You are required to configure at least availability monitoring or real user monitoring to be able to create website.                |