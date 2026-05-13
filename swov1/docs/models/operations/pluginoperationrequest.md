# PluginOperationRequest

## Example Usage

```typescript
import { PluginOperationRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: PluginOperationRequest = {
  entityId: "<id>",
  operation: "<value>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `entityId`                                    | *string*                                      | :heavy_check_mark:                            | Entity ID.                                    |
| `operation`                                   | *string*                                      | :heavy_check_mark:                            | Name of the operation to apply to the plugin. |