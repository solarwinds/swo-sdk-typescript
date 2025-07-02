# ListProbesResponse

## Example Usage

```typescript
import { ListProbesResponse } from "@solarwinds/swo-sdk-typescript/models/components";

let value: ListProbesResponse = {
  probes: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `probes`                                               | [components.Probe](../../models/components/probe.md)[] | :heavy_check_mark:                                     | Synthetic probes used to perform availability tests.   |