# ListProbesResponse

The request has succeeded.

## Example Usage

```typescript
import { ListProbesResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListProbesResponse = {
  probes: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `probes`                                               | [components.Probe](../../models/components/probe.md)[] | :heavy_check_mark:                                     | Synthetic probes used to perform availability tests.   |