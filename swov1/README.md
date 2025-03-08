# @solarwinds/swo-sdk-typescript

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *@solarwinds/swo-sdk-typescript* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@solarwinds/swo-sdk-typescript&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/swo/swo). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

SolarWinds Observability: SolarWinds Observability REST API
[Rest API Documentation](https://documentation.solarwinds.com/en/success_center/observability/content/api/api-swagger.htm)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@solarwinds/swo-sdk-typescript](#solarwindsswo-sdk-typescript)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Swo": {
      "command": "npx",
      "args": [
        "-y", "--package", "@solarwinds/swo-sdk-typescript",
        "--",
        "mcp", "start",
        "--api-token", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Go to `Cursor Settings > Features > MCP Servers > Add new MCP server` and use the following settings:

- Name: Swo
- Type: `command`
- Command:
```sh
npx -y --package @solarwinds/swo-sdk-typescript -- mcp start --api-token ... 
```

</details>

For a full list of server arguments, run:

```sh
npx -y --package @solarwinds/swo-sdk-typescript -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name       | Type | Scheme      | Environment Variable |
| ---------- | ---- | ----------- | -------------------- |
| `apiToken` | http | HTTP Bearer | `SWO_API_TOKEN`      |

To authenticate with the API the `apiToken` parameter must be set when initializing the SDK client instance. For example:
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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [changeEvents](docs/sdks/changeevents/README.md)

* [createChangeEvent](docs/sdks/changeevents/README.md#createchangeevent) - Create an event

### [dem](docs/sdks/dem/README.md)

* [getDemSettings](docs/sdks/dem/README.md#getdemsettings) - Get DEM settings
* [setDemSettings](docs/sdks/dem/README.md#setdemsettings) - Set DEM settings
* [createWebsite](docs/sdks/dem/README.md#createwebsite) - Create website monitoring configuration
* [getWebsite](docs/sdks/dem/README.md#getwebsite) - Get website monitoring configuration
* [updateWebsite](docs/sdks/dem/README.md#updatewebsite) - Update website monitoring configuration
* [deleteWebsite](docs/sdks/dem/README.md#deletewebsite) - Delete website
* [pauseWebsiteMonitoring](docs/sdks/dem/README.md#pausewebsitemonitoring) - Pause monitoring of a website
* [unpauseWebsiteMonitoring](docs/sdks/dem/README.md#unpausewebsitemonitoring) - Unpause monitoring of a website

### [entities](docs/sdks/entities/README.md)

* [listEntities](docs/sdks/entities/README.md#listentities) - Get a list of entities by type. A returned empty list indicates no entities matched the given parameters.
* [getEntityById](docs/sdks/entities/README.md#getentitybyid) - Get an entity by ID
* [updateEntityById](docs/sdks/entities/README.md#updateentitybyid) - Update an entity by ID

### [logs](docs/sdks/logs/README.md)

* [searchLogs](docs/sdks/logs/README.md#searchlogs) - Search logs
* [listLogArchives](docs/sdks/logs/README.md#listlogarchives) - Retrieve location and metadata of log archives

### [metadata](docs/sdks/metadata/README.md)

* [listEntityTypes](docs/sdks/metadata/README.md#listentitytypes) - List all entity types
* [listMetricsForEntityType](docs/sdks/metadata/README.md#listmetricsforentitytype) - List metrics metadata for an entity type

### [metrics](docs/sdks/metrics/README.md)

* [listMetrics](docs/sdks/metrics/README.md#listmetrics) - List metrics
* [createCompositeMetric](docs/sdks/metrics/README.md#createcompositemetric) - Create composite metric
* [updateCompositeMetric](docs/sdks/metrics/README.md#updatecompositemetric) - Update composite metric
* [deleteCompositeMetric](docs/sdks/metrics/README.md#deletecompositemetric) - Delete composite metric
* [getMetricByName](docs/sdks/metrics/README.md#getmetricbyname) - Get metric info by name
* [listMetricAttributes](docs/sdks/metrics/README.md#listmetricattributes) - List metric attribute names
* [listMetricAttributeValues](docs/sdks/metrics/README.md#listmetricattributevalues) - List metric attribute values
* [listMetricMeasurements](docs/sdks/metrics/README.md#listmetricmeasurements) - List metric measurement values, grouped by attributes, filtered by the filter. An empty list indicates no data points are available for the given parameters.


### [tokens](docs/sdks/tokens/README.md)

* [createToken](docs/sdks/tokens/README.md#createtoken) - Create ingestion token

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`changeEventsCreateChangeEvent`](docs/sdks/changeevents/README.md#createchangeevent) - Create an event
- [`demCreateWebsite`](docs/sdks/dem/README.md#createwebsite) - Create website monitoring configuration
- [`demDeleteWebsite`](docs/sdks/dem/README.md#deletewebsite) - Delete website
- [`demGetDemSettings`](docs/sdks/dem/README.md#getdemsettings) - Get DEM settings
- [`demGetWebsite`](docs/sdks/dem/README.md#getwebsite) - Get website monitoring configuration
- [`demPauseWebsiteMonitoring`](docs/sdks/dem/README.md#pausewebsitemonitoring) - Pause monitoring of a website
- [`demSetDemSettings`](docs/sdks/dem/README.md#setdemsettings) - Set DEM settings
- [`demUnpauseWebsiteMonitoring`](docs/sdks/dem/README.md#unpausewebsitemonitoring) - Unpause monitoring of a website
- [`demUpdateWebsite`](docs/sdks/dem/README.md#updatewebsite) - Update website monitoring configuration
- [`entitiesGetEntityById`](docs/sdks/entities/README.md#getentitybyid) - Get an entity by ID
- [`entitiesListEntities`](docs/sdks/entities/README.md#listentities) - Get a list of entities by type. A returned empty list indicates no entities matched the given parameters.
- [`entitiesUpdateEntityById`](docs/sdks/entities/README.md#updateentitybyid) - Update an entity by ID
- [`logsListLogArchives`](docs/sdks/logs/README.md#listlogarchives) - Retrieve location and metadata of log archives
- [`logsSearchLogs`](docs/sdks/logs/README.md#searchlogs) - Search logs
- [`metadataListEntityTypes`](docs/sdks/metadata/README.md#listentitytypes) - List all entity types
- [`metadataListMetricsForEntityType`](docs/sdks/metadata/README.md#listmetricsforentitytype) - List metrics metadata for an entity type
- [`metricsCreateCompositeMetric`](docs/sdks/metrics/README.md#createcompositemetric) - Create composite metric
- [`metricsDeleteCompositeMetric`](docs/sdks/metrics/README.md#deletecompositemetric) - Delete composite metric
- [`metricsGetMetricByName`](docs/sdks/metrics/README.md#getmetricbyname) - Get metric info by name
- [`metricsListMetricAttributes`](docs/sdks/metrics/README.md#listmetricattributes) - List metric attribute names
- [`metricsListMetricAttributeValues`](docs/sdks/metrics/README.md#listmetricattributevalues) - List metric attribute values
- [`metricsListMetricMeasurements`](docs/sdks/metrics/README.md#listmetricmeasurements) - List metric measurement values, grouped by attributes, filtered by the filter. An empty list indicates no data points are available for the given parameters.
- [`metricsListMetrics`](docs/sdks/metrics/README.md#listmetrics) - List metrics
- [`metricsUpdateCompositeMetric`](docs/sdks/metrics/README.md#updatecompositemetric) - Update composite metric
- [`tokensCreateToken`](docs/sdks/tokens/README.md#createtoken) - Create ingestion token

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.entities.listEntities({
    type: "<value>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `createWebsite` method may throw the following errors:

| Error Type                          | Status Code | Content Type     |
| ----------------------------------- | ----------- | ---------------- |
| errors.CreateWebsiteBadRequestError | 400         | application/json |
| errors.APIError                     | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";
import {
  CreateWebsiteBadRequestError,
  SDKValidationError,
} from "@solarwinds/swo-sdk-typescript/models/errors";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  let result;
  try {
    result = await swo.dem.createWebsite({
      name: "solarwinds.com",
      url: "https://www.solarwinds.com",
      availabilityCheckSettings: {
        checkForString: {
          operator: "CONTAINS",
          value: "string",
        },
        testIntervalInSeconds: 14400,
        protocols: [
          "HTTP",
          "HTTPS",
        ],
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
        outageConfiguration: {
          failingTestLocations: "all",
          consecutiveForDown: 2,
        },
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
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof CreateWebsiteBadRequestError): {
        // Handle err.data$: CreateWebsiteBadRequestErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Server Variables

The default server `https://api.na-01.cloud.solarwinds.com` contains variables and is set to `https://api.na-01.cloud.solarwinds.com` by default. To override default values, the following parameters are available when initializing the SDK client instance:

| Variable | Parameter        | Default   | Description |
| -------- | ---------------- | --------- | ----------- |
| `region` | `region: string` | `"na-01"` | Region name |

#### Example

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  region: "<value>",
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

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  serverURL: "https://api.na-01.cloud.solarwinds.com",
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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";
import { HTTPClient } from "@solarwinds/swo-sdk-typescript/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Swo({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const sdk = new Swo({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `SWO_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@solarwinds/swo-sdk-typescript&utm_campaign=typescript)
