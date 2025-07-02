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

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                | [components.TestFromType](../../models/components/testfromtype.md)                                                    | :heavy_check_mark:                                                                                                    | Specificity for location of synthetic probes to be used for availability tests.                                       | REGION                                                                                                                |
| `values`                                                                                                              | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | A list of probe location values of the selected type. At least one value matching an existing probe must be provided. | [<br/>"NA"<br/>]                                                                                                      |