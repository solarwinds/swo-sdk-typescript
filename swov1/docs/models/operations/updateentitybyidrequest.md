# UpdateEntityByIdRequest

## Example Usage

```typescript
import { UpdateEntityByIdRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: UpdateEntityByIdRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The entity's ID                                                                                                       |
| `entity`                                                                                                              | [components.EntityInput](../../models/components/entityinput.md)                                                      | :heavy_check_mark:                                                                                                    | Entity properties to update. The entire representation of the entity as to be stored must be provided in the request. |