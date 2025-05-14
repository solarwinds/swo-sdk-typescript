# Probe

## Example Usage

```typescript
import { Probe } from "@solarwinds/swo-sdk-typescript/models/components";

let value: Probe = {
  id: "probe-1",
  name: "Washington",
  active: true,
  platform: "AWS",
  region: "NA",
  country: "US",
  city: "Washington D.C.",
  coordinates: {
    latitude: 38.89511,
    longitude: -77.03637,
  },
  ipv4Addresses: [
    "34.232.5.40",
    "44.207.30.12",
  ],
  ipv6Addresses: [
    "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | Unique identifier of the probe.                                    | probe-1                                                            |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Name of the probe.                                                 | Washington                                                         |
| `active`                                                           | *boolean*                                                          | :heavy_check_mark:                                                 | True if the probe is active.                                       | true                                                               |
| `platform`                                                         | [components.Platform](../../models/components/platform.md)         | :heavy_check_mark:                                                 | Cloud platform hosting the probe.                                  | AWS                                                                |
| `region`                                                           | *string*                                                           | :heavy_check_mark:                                                 | Region where the probe is located.                                 | NA                                                                 |
| `country`                                                          | *string*                                                           | :heavy_check_mark:                                                 | ISO 3166-1 alpha-2 code of the country where the probe is located. | US                                                                 |
| `city`                                                             | *string*                                                           | :heavy_check_mark:                                                 | City where the probe is located.                                   | Washington D.C.                                                    |
| `coordinates`                                                      | [components.Coordinates](../../models/components/coordinates.md)   | :heavy_check_mark:                                                 | Coordinates of the probe.                                          | {<br/>"latitude": 38.89511,<br/>"longitude": -77.03637<br/>}       |
| `ipv4Addresses`                                                    | *string*[]                                                         | :heavy_check_mark:                                                 | IPv4 addresses of the probe.                                       | [<br/>"34.232.5.40",<br/>"44.207.30.12"<br/>]                      |
| `ipv6Addresses`                                                    | *string*[]                                                         | :heavy_minus_sign:                                                 | IPv6 addresses of the probe. Not all probes support IPv6.          | [<br/>"2001:0db8:85a3:0000:0000:8a2e:0370:7334"<br/>]              |