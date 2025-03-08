# ListEntityTypesResponse

List of entity types

## Example Usage

```typescript
import { ListEntityTypesResponse } from "@solarwinds/swo-sdk-typescript/models/operations";

let value: ListEntityTypesResponse = {
  types: [
    "Service",
    "ServiceInstance",
    "KubernetesCluster",
  ],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `types`                                               | *string*[]                                            | :heavy_check_mark:                                    | N/A                                                   | [<br/>"Service",<br/>"ServiceInstance",<br/>"KubernetesCluster"<br/>] |