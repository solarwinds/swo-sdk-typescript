# Metrics

## Overview

### Available Operations

* [listMetrics](#listmetrics) - List metrics
* [createCompositeMetric](#createcompositemetric) - Create composite metric
* [listMultiMetricMeasurements](#listmultimetricmeasurements) - List measurements for a batch of metrics
* [getMetricByName](#getmetricbyname) - Get metric info by name
* [updateCompositeMetric](#updatecompositemetric) - Update composite metric
* [deleteCompositeMetric](#deletecompositemetric) - Delete composite metric
* [listMetricAttributes](#listmetricattributes) - List metric attribute names
* [listMetricAttributeValues](#listmetricattributevalues) - List metric attribute values
* [listMetricMeasurements](#listmetricmeasurements) - List metric measurement values, grouped by attributes, filtered by the filter. An empty list indicates no data points are available for the given parameters.

## listMetrics

List metrics available within a time period.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listMetrics" method="get" path="/v1/metrics" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.metrics.listMetrics({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { metricsListMetrics } from "@solarwinds/swo-sdk-typescript/funcs/metricsListMetrics.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await metricsListMetrics(swo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("metricsListMetrics failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListMetricsRequest](../../models/operations/listmetricsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListMetricsResponse](../../models/operations/listmetricsresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CommonBadRequestErrorResponse   | 400                                    | application/json                       |
| errors.CommonUnauthorizedErrorResponse | 401                                    | application/json                       |
| errors.CommonInternalErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## createCompositeMetric

Create a composite metric given a PromQL query.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCompositeMetric" method="post" path="/v1/metrics" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.metrics.createCompositeMetric({
    name: "composite.custom.system.disk.io.rate",
    displayName: "Disk IO rate",
    description: "Disk bytes transferred per second",
    formula: "rate(system.disk.io[5m])",
    units: "bytes/s",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { metricsCreateCompositeMetric } from "@solarwinds/swo-sdk-typescript/funcs/metricsCreateCompositeMetric.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await metricsCreateCompositeMetric(swo, {
    name: "composite.custom.system.disk.io.rate",
    displayName: "Disk IO rate",
    description: "Disk bytes transferred per second",
    formula: "rate(system.disk.io[5m])",
    units: "bytes/s",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsCreateCompositeMetric failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.MetricsCompositeMetric](../../models/components/metricscompositemetric.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetricsCompositeMetric](../../models/components/metricscompositemetric.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CommonBadRequestErrorResponse   | 400                                    | application/json                       |
| errors.CommonUnauthorizedErrorResponse | 401                                    | application/json                       |
| errors.CommonConflictErrorResponse     | 409                                    | application/json                       |
| errors.CommonInternalErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## listMultiMetricMeasurements

  List metric measurements, potentially filtered and aggregated. This operation mimics the
  capabilities found in GET `/v1/metrics/{name}/measurements`, extending it for an entire batch of
  metrics that can be requested at once, over the same time interval.

  It is legal to request the same metric multiple times, using different aggregations. For
  example, both the total for the interval (scalar) and a time series can be read simultaneously,
  using two different entries in the request payload. Entries in the response can be matched with
  the respective requests by metric name. When more than one exist for the same name, an `id`
  can be provided to disambiguate. This property will be echoed back unchanged and can be used
  for some or all entries, regardless of whether metrics repeat.

  By default, this endpoint will omit response entries that include no measurements. This is done
  only when the request contains enough information for the client to successfully match all
  responses back to their respective requests—i.e., when there is at most one entry for each
  combination of metric name and `id`. This provides a cleaner response, especially in case where
  multiple pages need to be traversed and data for most metric entries is exhausted early.
  Otherwise, empty entries will be included as well and the output will be fully positional. This
  positional mode can be forced with `forcePositional`.

  Pages can be navigated by following the links returned in `pageInfo`. Those requests must also
  be POST and must include the same payload that was initially sent. Behavior is undefined
  otherwise.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listMultiMetricMeasurements" method="post" path="/v1/metrics/measurements" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.metrics.listMultiMetricMeasurements({
    requestBody: {
      metrics: [],
    },
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { metricsListMultiMetricMeasurements } from "@solarwinds/swo-sdk-typescript/funcs/metricsListMultiMetricMeasurements.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await metricsListMultiMetricMeasurements(swo, {
    requestBody: {
      metrics: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("metricsListMultiMetricMeasurements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListMultiMetricMeasurementsRequest](../../models/operations/listmultimetricmeasurementsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListMultiMetricMeasurementsResponse](../../models/operations/listmultimetricmeasurementsresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CommonBadRequestErrorResponse   | 400                                    | application/json                       |
| errors.CommonUnauthorizedErrorResponse | 401                                    | application/json                       |
| errors.CommonInternalErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## getMetricByName

Get information about a given metric.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMetricByName" method="get" path="/v1/metrics/{name}" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.metrics.getMetricByName({
    name: "<value>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { metricsGetMetricByName } from "@solarwinds/swo-sdk-typescript/funcs/metricsGetMetricByName.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await metricsGetMetricByName(swo, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("metricsGetMetricByName failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetricByNameRequest](../../models/operations/getmetricbynamerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMetricByNameResponse](../../models/operations/getmetricbynameresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CommonUnauthorizedErrorResponse | 401                                    | application/json                       |
| errors.CommonNotFoundErrorResponse     | 404                                    | application/json                       |
| errors.CommonInternalErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## updateCompositeMetric

Update a composite metric given a metric name.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCompositeMetric" method="put" path="/v1/metrics/{name}" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.metrics.updateCompositeMetric({
    name: "<value>",
    metricsUpdateCompositeMetricRequest: {
      displayName: "Disk IO rate",
      description: "Disk bytes transferred per second",
      formula: "rate(system.disk.io[5m])",
      units: "bytes/s",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { metricsUpdateCompositeMetric } from "@solarwinds/swo-sdk-typescript/funcs/metricsUpdateCompositeMetric.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await metricsUpdateCompositeMetric(swo, {
    name: "<value>",
    metricsUpdateCompositeMetricRequest: {
      displayName: "Disk IO rate",
      description: "Disk bytes transferred per second",
      formula: "rate(system.disk.io[5m])",
      units: "bytes/s",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsUpdateCompositeMetric failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCompositeMetricRequest](../../models/operations/updatecompositemetricrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetricsCompositeMetric](../../models/components/metricscompositemetric.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.CommonBadRequestErrorResponse       | 400                                        | application/json                           |
| errors.CommonUnauthorizedErrorResponse     | 401                                        | application/json                           |
| errors.MetricsMetricForbiddenErrorResponse | 403                                        | application/json                           |
| errors.CommonNotFoundErrorResponse         | 404                                        | application/json                           |
| errors.CommonInternalErrorResponse         | 500                                        | application/json                           |
| errors.APIError                            | 4XX, 5XX                                   | \*/\*                                      |

## deleteCompositeMetric

Delete a composite metric given a metric name.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteCompositeMetric" method="delete" path="/v1/metrics/{name}" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  await swo.metrics.deleteCompositeMetric({
    name: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { metricsDeleteCompositeMetric } from "@solarwinds/swo-sdk-typescript/funcs/metricsDeleteCompositeMetric.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await metricsDeleteCompositeMetric(swo, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("metricsDeleteCompositeMetric failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteCompositeMetricRequest](../../models/operations/deletecompositemetricrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.CommonUnauthorizedErrorResponse     | 401                                        | application/json                           |
| errors.MetricsMetricForbiddenErrorResponse | 403                                        | application/json                           |
| errors.CommonNotFoundErrorResponse         | 404                                        | application/json                           |
| errors.CommonInternalErrorResponse         | 500                                        | application/json                           |
| errors.APIError                            | 4XX, 5XX                                   | \*/\*                                      |

## listMetricAttributes

List attribute names for a given metric.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listMetricAttributes" method="get" path="/v1/metrics/{name}/attributes" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.metrics.listMetricAttributes({
    name: "<value>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { metricsListMetricAttributes } from "@solarwinds/swo-sdk-typescript/funcs/metricsListMetricAttributes.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await metricsListMetricAttributes(swo, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("metricsListMetricAttributes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListMetricAttributesRequest](../../models/operations/listmetricattributesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListMetricAttributesResponse](../../models/operations/listmetricattributesresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CommonBadRequestErrorResponse   | 400                                    | application/json                       |
| errors.CommonUnauthorizedErrorResponse | 401                                    | application/json                       |
| errors.CommonNotFoundErrorResponse     | 404                                    | application/json                       |
| errors.CommonInternalErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## listMetricAttributeValues

List the values of a given metric's attribute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listMetricAttributeValues" method="get" path="/v1/metrics/{name}/attributes/{attributeName}" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.metrics.listMetricAttributeValues({
    name: "<value>",
    attributeName: "<value>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { metricsListMetricAttributeValues } from "@solarwinds/swo-sdk-typescript/funcs/metricsListMetricAttributeValues.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await metricsListMetricAttributeValues(swo, {
    name: "<value>",
    attributeName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("metricsListMetricAttributeValues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListMetricAttributeValuesRequest](../../models/operations/listmetricattributevaluesrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListMetricAttributeValuesResponse](../../models/operations/listmetricattributevaluesresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CommonBadRequestErrorResponse   | 400                                    | application/json                       |
| errors.CommonUnauthorizedErrorResponse | 401                                    | application/json                       |
| errors.CommonNotFoundErrorResponse     | 404                                    | application/json                       |
| errors.CommonInternalErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## listMetricMeasurements

List metric measurement values, grouped by attributes, filtered by the filter. An empty list indicates no data points are available for the given parameters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listMetricMeasurements" method="get" path="/v1/metrics/{name}/measurements" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.metrics.listMetricMeasurements({
    name: "<value>",
    seriesType: "TIMESERIES",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { metricsListMetricMeasurements } from "@solarwinds/swo-sdk-typescript/funcs/metricsListMetricMeasurements.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await metricsListMetricMeasurements(swo, {
    name: "<value>",
    seriesType: "TIMESERIES",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("metricsListMetricMeasurements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListMetricMeasurementsRequest](../../models/operations/listmetricmeasurementsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListMetricMeasurementsResponse](../../models/operations/listmetricmeasurementsresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CommonBadRequestErrorResponse   | 400                                    | application/json                       |
| errors.CommonUnauthorizedErrorResponse | 401                                    | application/json                       |
| errors.CommonNotFoundErrorResponse     | 404                                    | application/json                       |
| errors.CommonInternalErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |