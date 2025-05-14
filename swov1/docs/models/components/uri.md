# Uri

## Example Usage

```typescript
import { Uri } from "@solarwinds/swo-sdk-typescript/models/components";

let value: Uri = {
  name: "example-uri",
  ipOrDomain: "solarwinds.com",
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
        "EU",
      ],
    },
    testIntervalInSeconds: 300,
    tcp: {
      enabled: true,
      port: 443,
    },
  },
  tags: [
    {
      key: "team",
      value: "backend",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                                           | *string*                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                               | Name of the URI, which must be unique within the organization. The name must also not contain any control characters, any white space other than space (U+0020), or any consecutive, leading or trailing spaces. |
| `ipOrDomain`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                               | IP/domain of the URI.                                                                                                                                                                                            |
| `availabilityCheckSettings`                                                                                                                                                                                      | [components.UriAvailabilityCheckSettingsInput](../../models/components/uriavailabilitychecksettingsinput.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                                                               | Use this field to configure availability tests for the URI.                                                                                                                                                      |
| `tags`                                                                                                                                                                                                           | [components.Tag](../../models/components/tag.md)[]                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                               | Tags associated with the URI for categorization.                                                                                                                                                                 |