# UpdateEntityByIdRequest

## Example Usage

```typescript
import { UpdateEntityByIdRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: UpdateEntityByIdRequest = {
  id: "<id>",
  entitiesEntity: {
    displayName: "SyslogTest",
    tags: {
      "gg.tk.token": "test",
      "kfi.tk.token": "qa-test",
    },
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The entity's ID                                                                                                       |
| `entitiesEntity`                                                                                                      | [components.EntitiesEntityInput](../../models/components/entitiesentityinput.md)                                      | :heavy_check_mark:                                                                                                    | Entity properties to update. The entire representation of the entity as to be stored must be provided in the request. |