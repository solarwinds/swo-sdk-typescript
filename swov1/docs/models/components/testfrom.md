# TestFrom

## Example Usage

```typescript
import { TestFrom } from "@solarwinds/swo-sdk-typescript/models/components";

let value: TestFrom = {
  type: "REGION",
  values: [
    "NA",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                | [components.ProbeLocationType](../../models/components/probelocationtype.md)                                          | :heavy_check_mark:                                                                                                    | Specificity for location of synthetic probes to be used for availability tests.                                       |
| `values`                                                                                                              | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | A list of probe location values of the selected type. At least one value matching an existing probe must be provided. |