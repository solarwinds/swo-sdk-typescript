# CreateTokenRequest

## Example Usage

```typescript
import { CreateTokenRequest } from "@solarwinds/swo-sdk-typescript/models/components";

let value: CreateTokenRequest = {
  name: "<value>",
  tags: {
    server: "<value>",
    tagWithoutValue: "<value>",
  },
  type: "ingestion",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `tags`                                                                                 | [components.Tags](../../models/components/tags.md)                                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [components.CreateTokenRequestType](../../models/components/createtokenrequesttype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |