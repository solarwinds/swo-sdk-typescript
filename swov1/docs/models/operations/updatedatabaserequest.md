# UpdateDatabaseRequest

## Example Usage

```typescript
import { UpdateDatabaseRequest } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: UpdateDatabaseRequest = {
  entityId: "<id>",
  dboUpdateDatabaseRequest: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `entityId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | Entity ID.                                                                                 |
| `dboUpdateDatabaseRequest`                                                                 | [components.DboUpdateDatabaseRequest](../../models/components/dboupdatedatabaserequest.md) | :heavy_check_mark:                                                                         | Database configuration updates.                                                            |