# CommonTag

## Example Usage

```typescript
import { CommonTag } from "@solarwinds/swo-sdk-typescript/models/components";

let value: CommonTag = {
  key: "environment",
  value: "production",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `key`              | *string*           | :heavy_check_mark: | Tag key.           | environment        |
| `value`            | *string*           | :heavy_check_mark: | Tag value.         | production         |