# Dem
(*dem*)

## Overview

### Available Operations

* [listProbes](#listprobes) - Get a list of existing synthetic probes
* [getDemSettings](#getdemsettings) - Get DEM settings
* [setDemSettings](#setdemsettings) - Set DEM settings
* [createUri](#createuri) - Create URI monitoring configuration
* [getUri](#geturi) - Get URI monitoring configuration
* [updateUri](#updateuri) - Update URI monitoring configuration
* [deleteUri](#deleteuri) - Delete URI
* [pauseUriMonitoring](#pauseurimonitoring) - Pause monitoring of the URI
* [unpauseUriMonitoring](#unpauseurimonitoring) - Unpause monitoring of the URI
* [createWebsite](#createwebsite) - Create website monitoring configuration
* [getWebsite](#getwebsite) - Get website monitoring configuration
* [updateWebsite](#updatewebsite) - Update website monitoring configuration
* [deleteWebsite](#deletewebsite) - Delete website
* [pauseWebsiteMonitoring](#pausewebsitemonitoring) - Pause monitoring of a website
* [unpauseWebsiteMonitoring](#unpausewebsitemonitoring) - Unpause monitoring of a website

## listProbes

Get a list of existing synthetic probes

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.listProbes();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demListProbes } from "@solarwinds/swo-sdk-typescript/funcs/demListProbes.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demListProbes(swo);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListProbesResponse](../../models/operations/listprobesresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ListProbesInternalServerError | 500                                  | application/json                     |
| errors.APIError                      | 4XX, 5XX                             | \*/\*                                |

## getDemSettings

Get DEM settings

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.getDemSettings();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demGetDemSettings } from "@solarwinds/swo-sdk-typescript/funcs/demGetDemSettings.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demGetDemSettings(swo);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OutageConfiguration](../../models/components/outageconfiguration.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## setDemSettings

Set DEM settings

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  await swo.dem.setDemSettings({
    failingTestLocations: "all",
    consecutiveForDown: 2,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demSetDemSettings } from "@solarwinds/swo-sdk-typescript/funcs/demSetDemSettings.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demSetDemSettings(swo, {
    failingTestLocations: "all",
    consecutiveForDown: 2,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.OutageConfiguration](../../models/components/outageconfiguration.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createUri

Create URI monitoring configuration

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.createUri({
    name: "example-uri",
    ipOrDomain: "solarwinds.com",
    availabilityCheckSettings: {
      platformOptions: {
        probePlatforms: [
          "AWS",
        ],
        testFromAll: true,
      },
      testFrom: {
        type: "REGION",
        values: [
          "NA",
        ],
      },
      testIntervalInSeconds: 300,
      outageConfiguration: {
        failingTestLocations: "all",
        consecutiveForDown: 2,
      },
      tcp: {
        enabled: true,
        port: 443,
      },
    },
    tags: [
      {
        key: "environment",
        value: "production",
      },
    ],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demCreateUri } from "@solarwinds/swo-sdk-typescript/funcs/demCreateUri.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demCreateUri(swo, {
    name: "example-uri",
    ipOrDomain: "solarwinds.com",
    availabilityCheckSettings: {
      platformOptions: {
        probePlatforms: [
          "AWS",
        ],
        testFromAll: true,
      },
      testFrom: {
        type: "REGION",
        values: [
          "NA",
        ],
      },
      testIntervalInSeconds: 300,
      outageConfiguration: {
        failingTestLocations: "all",
        consecutiveForDown: 2,
      },
      tcp: {
        enabled: true,
        port: 443,
      },
    },
    tags: [
      {
        key: "environment",
        value: "production",
      },
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.Uri](../../models/components/uri.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EntityId](../../models/components/entityid.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.CreateUriBadRequestError | 400                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## getUri

Get URI monitoring configuration

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.getUri({
    entityId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demGetUri } from "@solarwinds/swo-sdk-typescript/funcs/demGetUri.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demGetUri(swo, {
    entityId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUriRequest](../../models/operations/geturirequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetUriResponse](../../models/operations/geturiresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.GetUriNotFoundError | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## updateUri

Update URI monitoring configuration

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.updateUri({
    entityId: "<id>",
    uri: {
      name: "example-uri",
      ipOrDomain: "solarwinds.com",
      availabilityCheckSettings: {
        platformOptions: {
          probePlatforms: [
            "AWS",
          ],
          testFromAll: true,
        },
        testFrom: {
          type: "REGION",
          values: [
            "NA",
          ],
        },
        testIntervalInSeconds: 300,
        outageConfiguration: {
          failingTestLocations: "all",
          consecutiveForDown: 2,
        },
        tcp: {
          enabled: true,
          port: 443,
        },
      },
      tags: [
        {
          key: "environment",
          value: "production",
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demUpdateUri } from "@solarwinds/swo-sdk-typescript/funcs/demUpdateUri.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demUpdateUri(swo, {
    entityId: "<id>",
    uri: {
      name: "example-uri",
      ipOrDomain: "solarwinds.com",
      availabilityCheckSettings: {
        platformOptions: {
          probePlatforms: [
            "AWS",
          ],
          testFromAll: true,
        },
        testFrom: {
          type: "REGION",
          values: [
            "NA",
          ],
        },
        testIntervalInSeconds: 300,
        outageConfiguration: {
          failingTestLocations: "all",
          consecutiveForDown: 2,
        },
        tcp: {
          enabled: true,
          port: 443,
        },
      },
      tags: [
        {
          key: "environment",
          value: "production",
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateUriRequest](../../models/operations/updateurirequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EntityId](../../models/components/entityid.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.UpdateUriBadRequestError | 400                             | application/json                |
| errors.UpdateUriNotFoundError   | 404                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## deleteUri

Delete URI

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.deleteUri({
    entityId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demDeleteUri } from "@solarwinds/swo-sdk-typescript/funcs/demDeleteUri.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demDeleteUri(swo, {
    entityId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteUriRequest](../../models/operations/deleteurirequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EntityId](../../models/components/entityid.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.DeleteUriNotFoundError | 404                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## pauseUriMonitoring

Pause monitoring of the URI

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.pauseUriMonitoring({
    entityId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demPauseUriMonitoring } from "@solarwinds/swo-sdk-typescript/funcs/demPauseUriMonitoring.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demPauseUriMonitoring(swo, {
    entityId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PauseUriMonitoringRequest](../../models/operations/pauseurimonitoringrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EntityId](../../models/components/entityid.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.PauseUriMonitoringNotFoundError | 404                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## unpauseUriMonitoring

Unpause monitoring of the URI

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.unpauseUriMonitoring({
    entityId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demUnpauseUriMonitoring } from "@solarwinds/swo-sdk-typescript/funcs/demUnpauseUriMonitoring.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demUnpauseUriMonitoring(swo, {
    entityId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnpauseUriMonitoringRequest](../../models/operations/unpauseurimonitoringrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EntityId](../../models/components/entityid.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.UnpauseUriMonitoringNotFoundError | 404                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## createWebsite

Create website monitoring configuration

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.createWebsite({
    name: "solarwinds.com",
    url: "https://www.solarwinds.com",
    availabilityCheckSettings: {
      platformOptions: {
        probePlatforms: [
          "AWS",
        ],
        testFromAll: true,
      },
      testFrom: {
        type: "REGION",
        values: [
          "NA",
        ],
      },
      testIntervalInSeconds: 14400,
      outageConfiguration: {
        failingTestLocations: "all",
        consecutiveForDown: 2,
      },
      checkForString: {
        operator: "CONTAINS",
        value: "string",
      },
      protocols: [
        "HTTP",
        "HTTPS",
      ],
      ssl: {
        enabled: true,
        daysPriorToExpiration: 7,
        ignoreIntermediateCertificates: true,
      },
      customHeaders: [
        {
          name: "string",
          value: "string",
        },
      ],
      allowInsecureRenegotiation: true,
      postData: "{\"example\": \"value\"}",
    },
    tags: [
      {
        key: "environment",
        value: "production",
      },
    ],
    rum: {
      apdexTimeInSeconds: 4,
      spa: true,
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demCreateWebsite } from "@solarwinds/swo-sdk-typescript/funcs/demCreateWebsite.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demCreateWebsite(swo, {
    name: "solarwinds.com",
    url: "https://www.solarwinds.com",
    availabilityCheckSettings: {
      platformOptions: {
        probePlatforms: [
          "AWS",
        ],
        testFromAll: true,
      },
      testFrom: {
        type: "REGION",
        values: [
          "NA",
        ],
      },
      testIntervalInSeconds: 14400,
      outageConfiguration: {
        failingTestLocations: "all",
        consecutiveForDown: 2,
      },
      checkForString: {
        operator: "CONTAINS",
        value: "string",
      },
      protocols: [
        "HTTP",
        "HTTPS",
      ],
      ssl: {
        enabled: true,
        daysPriorToExpiration: 7,
        ignoreIntermediateCertificates: true,
      },
      customHeaders: [
        {
          name: "string",
          value: "string",
        },
      ],
      allowInsecureRenegotiation: true,
      postData: "{\"example\": \"value\"}",
    },
    tags: [
      {
        key: "environment",
        value: "production",
      },
    ],
    rum: {
      apdexTimeInSeconds: 4,
      spa: true,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.Website](../../models/components/website.md)                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EntityId](../../models/components/entityid.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.CreateWebsiteBadRequestError | 400                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## getWebsite

Get website monitoring configuration

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.getWebsite({
    entityId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demGetWebsite } from "@solarwinds/swo-sdk-typescript/funcs/demGetWebsite.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demGetWebsite(swo, {
    entityId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWebsiteRequest](../../models/operations/getwebsiterequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetWebsiteResponse](../../models/operations/getwebsiteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GetWebsiteNotFoundError | 404                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## updateWebsite

Update website monitoring configuration

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.updateWebsite({
    entityId: "<id>",
    website: {
      name: "solarwinds.com",
      url: "https://www.solarwinds.com",
      availabilityCheckSettings: {
        platformOptions: {
          probePlatforms: [
            "AWS",
          ],
          testFromAll: true,
        },
        testFrom: {
          type: "REGION",
          values: [
            "NA",
          ],
        },
        testIntervalInSeconds: 14400,
        outageConfiguration: {
          failingTestLocations: "all",
          consecutiveForDown: 2,
        },
        checkForString: {
          operator: "CONTAINS",
          value: "string",
        },
        protocols: [
          "HTTP",
          "HTTPS",
        ],
        ssl: {
          enabled: true,
          daysPriorToExpiration: 7,
          ignoreIntermediateCertificates: true,
        },
        customHeaders: [
          {
            name: "string",
            value: "string",
          },
        ],
        allowInsecureRenegotiation: true,
        postData: "{\"example\": \"value\"}",
      },
      tags: [
        {
          key: "environment",
          value: "production",
        },
      ],
      rum: {
        apdexTimeInSeconds: 4,
        spa: true,
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demUpdateWebsite } from "@solarwinds/swo-sdk-typescript/funcs/demUpdateWebsite.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demUpdateWebsite(swo, {
    entityId: "<id>",
    website: {
      name: "solarwinds.com",
      url: "https://www.solarwinds.com",
      availabilityCheckSettings: {
        platformOptions: {
          probePlatforms: [
            "AWS",
          ],
          testFromAll: true,
        },
        testFrom: {
          type: "REGION",
          values: [
            "NA",
          ],
        },
        testIntervalInSeconds: 14400,
        outageConfiguration: {
          failingTestLocations: "all",
          consecutiveForDown: 2,
        },
        checkForString: {
          operator: "CONTAINS",
          value: "string",
        },
        protocols: [
          "HTTP",
          "HTTPS",
        ],
        ssl: {
          enabled: true,
          daysPriorToExpiration: 7,
          ignoreIntermediateCertificates: true,
        },
        customHeaders: [
          {
            name: "string",
            value: "string",
          },
        ],
        allowInsecureRenegotiation: true,
        postData: "{\"example\": \"value\"}",
      },
      tags: [
        {
          key: "environment",
          value: "production",
        },
      ],
      rum: {
        apdexTimeInSeconds: 4,
        spa: true,
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateWebsiteRequest](../../models/operations/updatewebsiterequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EntityId](../../models/components/entityid.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.UpdateWebsiteBadRequestError | 400                                 | application/json                    |
| errors.UpdateWebsiteNotFoundError   | 404                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## deleteWebsite

Delete website

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.deleteWebsite({
    entityId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demDeleteWebsite } from "@solarwinds/swo-sdk-typescript/funcs/demDeleteWebsite.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demDeleteWebsite(swo, {
    entityId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteWebsiteRequest](../../models/operations/deletewebsiterequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EntityId](../../models/components/entityid.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.DeleteWebsiteNotFoundError | 404                               | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## pauseWebsiteMonitoring

Pause monitoring of a website

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.pauseWebsiteMonitoring({
    entityId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demPauseWebsiteMonitoring } from "@solarwinds/swo-sdk-typescript/funcs/demPauseWebsiteMonitoring.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demPauseWebsiteMonitoring(swo, {
    entityId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PauseWebsiteMonitoringRequest](../../models/operations/pausewebsitemonitoringrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EntityId](../../models/components/entityid.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.PauseWebsiteMonitoringNotFoundError | 404                                        | application/json                           |
| errors.APIError                            | 4XX, 5XX                                   | \*/\*                                      |

## unpauseWebsiteMonitoring

Unpause monitoring of a website

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.dem.unpauseWebsiteMonitoring({
    entityId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { demUnpauseWebsiteMonitoring } from "@solarwinds/swo-sdk-typescript/funcs/demUnpauseWebsiteMonitoring.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await demUnpauseWebsiteMonitoring(swo, {
    entityId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnpauseWebsiteMonitoringRequest](../../models/operations/unpausewebsitemonitoringrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EntityId](../../models/components/entityid.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.UnpauseWebsiteMonitoringNotFoundError | 404                                          | application/json                             |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |