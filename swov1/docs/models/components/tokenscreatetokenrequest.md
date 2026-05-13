# TokensCreateTokenRequest

## Example Usage

```typescript
import { TokensCreateTokenRequest } from "@solarwinds/swo-sdk-typescript/models/components";

let value: TokensCreateTokenRequest = {
  name: "<value>",
  tags: {
    server: "<value>",
    tagWithoutValue: "<value>",
  },
  type: "ingestion",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | Name of the token.                                                                                 |
| `tags`                                                                                             | [components.Tags](../../models/components/tags.md)                                                 | :heavy_check_mark:                                                                                 | Tags to associate with the token.                                                                  |
| `type`                                                                                             | [components.TokensCreateTokenRequestType](../../models/components/tokenscreatetokenrequesttype.md) | :heavy_check_mark:                                                                                 | Type of token. Currently only 'ingestion' is supported.                                            |