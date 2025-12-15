# Tokens

## Overview

### Available Operations

* [createToken](#createtoken) - Create ingestion token

## createToken

Create ingestion token

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createToken" method="post" path="/v1/tokens" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.tokens.createToken({
    name: "<value>",
    tags: {
      server: "<value>",
      tagWithoutValue: "<value>",
    },
    type: "ingestion",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { tokensCreateToken } from "@solarwinds/swo-sdk-typescript/funcs/tokensCreateToken.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await tokensCreateToken(swo, {
    name: "<value>",
    tags: {
      server: "<value>",
      tagWithoutValue: "<value>",
    },
    type: "ingestion",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tokensCreateToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.TokensCreateTokenRequest](../../models/components/tokenscreatetokenrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TokensCreateTokenResponse](../../models/components/tokenscreatetokenresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CommonUnauthorizedErrorResponse | 401                                    | application/json                       |
| errors.CommonForbiddenErrorResponse    | 403                                    | application/json                       |
| errors.CommonInternalErrorResponse     | 500                                    | application/json                       |
| errors.CommonUnavailableErrorResponse  | 503                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |