# ChangeEvents
(*changeEvents*)

## Overview

### Available Operations

* [createChangeEvent](#createchangeevent) - Create an event

## createChangeEvent

Create an event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createChangeEvent" method="post" path="/v1/changeevents" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.changeEvents.createChangeEvent({
    id: 1731676626,
    name: "app-deploys",
    title: "deployed v45",
    timestamp: 1731676626,
    source: "foo3.example.com",
    tags: {
      "app": "foo",
      "environment": "production",
    },
    links: [
      {
        rel: "self",
        href: "https://example.com",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { changeEventsCreateChangeEvent } from "@solarwinds/swo-sdk-typescript/funcs/changeEventsCreateChangeEvent.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await changeEventsCreateChangeEvent(swo, {
    id: 1731676626,
    name: "app-deploys",
    title: "deployed v45",
    timestamp: 1731676626,
    source: "foo3.example.com",
    tags: {
      "app": "foo",
      "environment": "production",
    },
    links: [
      {
        rel: "self",
        href: "https://example.com",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("changeEventsCreateChangeEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.ChangeEventsChangeEvent](../../models/components/changeeventschangeevent.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateChangeEventResponse](../../models/operations/createchangeeventresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CommonBadRequestErrorResponse   | 400                                    | application/json                       |
| errors.CommonUnauthorizedErrorResponse | 401                                    | application/json                       |
| errors.CommonInternalErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |