# DemTestFrom

## Example Usage

```typescript
import { DemTestFrom } from "@solarwinds/swo-sdk-typescript/models/components";

let value: DemTestFrom = {
  type: "REGION",
  values: [
    "NA",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                | [components.DemTestFromType](../../models/components/demtestfromtype.md)                                              | :heavy_check_mark:                                                                                                    | Geographic scope for selecting synthetic probe locations.                                                             | REGION                                                                                                                |
| `values`                                                                                                              | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | A list of probe location values of the selected type. At least one value matching an existing probe must be provided. | [<br/>"NA"<br/>]                                                                                                      |