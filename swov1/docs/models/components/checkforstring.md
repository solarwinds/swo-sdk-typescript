# CheckForString

  Use this field to configure whether availability tests should check for presence or absence of a particular string on a page.
  If the operator is DOES_NOT_CONTAIN and the value is found on the page, the availability test will fail.
  Likewise, if the operator is CONTAINS and the value is not found on the page, the availability test will fail.
  If omitted or set to null, the string checking functionality will be disabled.

## Example Usage

```typescript
import { CheckForString } from "@solarwinds/swo-sdk-typescript/models/components";

let value: CheckForString = {
  operator: "CONTAINS",
  value: "<value>",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `operator`                                                                                                                                 | [components.CheckForStringOperator](../../models/components/checkforstringoperator.md)                                                     | :heavy_check_mark:                                                                                                                         | Defines whether the check should pass only when the string is present on the page (CONTAINS) or only when it is absent (DOES_NOT_CONTAIN). |
| `value`                                                                                                                                    | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The string that which will be searched in the page source code.                                                                            |