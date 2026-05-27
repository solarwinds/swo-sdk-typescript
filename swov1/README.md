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

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @solarwinds/swo-sdk-typescript
```

### PNPM

```bash
pnpm add @solarwinds/swo-sdk-typescript
```

### Bun

```bash
bun add @solarwinds/swo-sdk-typescript
```

### Yarn

```bash
yarn add @solarwinds/swo-sdk-typescript
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
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

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [ChangeEvents](docs/sdks/changeevents/README.md)

* [createChangeEvent](docs/sdks/changeevents/README.md#createchangeevent) - Create an event

### [CloudAccounts](docs/sdks/cloudaccounts/README.md)

* [activateAwsIntegration](docs/sdks/cloudaccounts/README.md#activateawsintegration) - Activate AWS Integration
* [createOrgStructure](docs/sdks/cloudaccounts/README.md#createorgstructure) - Create Organizational Structure
* [updateAwsIntegration](docs/sdks/cloudaccounts/README.md#updateawsintegration) - Update AWS Integration

### [Dbo](docs/sdks/dbo/README.md)

* [observeDatabase](docs/sdks/dbo/README.md#observedatabase) - Add database observability to a database
* [getConfig](docs/sdks/dbo/README.md#getconfig) - Get organization-level configuration for database observability agents/plugins
* [setConfig](docs/sdks/dbo/README.md#setconfig) - Set organization-level configuration for database observability agents/plugins
* [getPublicKey](docs/sdks/dbo/README.md#getpublickey) - Get public key for encrypting database credentials locally
* [deleteDatabase](docs/sdks/dbo/README.md#deletedatabase) - Delete an observed database
* [updateDatabase](docs/sdks/dbo/README.md#updatedatabase) - Update an observed database
* [getPluginConfig](docs/sdks/dbo/README.md#getpluginconfig) - Get configuration of plugins observing a database
* [getPlugins](docs/sdks/dbo/README.md#getplugins) - Get status of plugins observing a database
* [pluginOperation](docs/sdks/dbo/README.md#pluginoperation) - Apply an operation on a database observability plugin
* [unobserveDatabase](docs/sdks/dbo/README.md#unobservedatabase) - Unobserve an observed database

### [Dem](docs/sdks/dem/README.md)

* [listProbes](docs/sdks/dem/README.md#listprobes) - Get a list of existing synthetic probes
* [getDemSettings](docs/sdks/dem/README.md#getdemsettings) - Get DEM settings
* [setDemSettings](docs/sdks/dem/README.md#setdemsettings) - Set DEM settings
* [createTransaction](docs/sdks/dem/README.md#createtransaction) - Create transaction monitoring configuration
* [getTransaction](docs/sdks/dem/README.md#gettransaction) - Get transaction monitoring configuration
* [updateTransaction](docs/sdks/dem/README.md#updatetransaction) - Update transaction monitoring configuration
* [deleteTransaction](docs/sdks/dem/README.md#deletetransaction) - Delete transaction
* [pauseTransactionMonitoring](docs/sdks/dem/README.md#pausetransactionmonitoring) - Pause monitoring of the transaction
* [unpauseTransactionMonitoring](docs/sdks/dem/README.md#unpausetransactionmonitoring) - Unpause monitoring of the transaction
* [createUri](docs/sdks/dem/README.md#createuri) - Create URI monitoring configuration
* [getUri](docs/sdks/dem/README.md#geturi) - Get URI monitoring configuration
* [updateUri](docs/sdks/dem/README.md#updateuri) - Update URI monitoring configuration
* [deleteUri](docs/sdks/dem/README.md#deleteuri) - Delete URI
* [getUriOutageStatuses](docs/sdks/dem/README.md#geturioutagestatuses) - Get outage statuses
* [pauseUriMonitoring](docs/sdks/dem/README.md#pauseurimonitoring) - Pause monitoring of the URI
* [getUriTestResults](docs/sdks/dem/README.md#geturitestresults) - Get test results
* [unpauseUriMonitoring](docs/sdks/dem/README.md#unpauseurimonitoring) - Unpause monitoring of the URI
* [createWebsite](docs/sdks/dem/README.md#createwebsite) - Create website monitoring configuration
* [getWebsite](docs/sdks/dem/README.md#getwebsite) - Get website monitoring configuration
* [updateWebsite](docs/sdks/dem/README.md#updatewebsite) - Update website monitoring configuration
* [deleteWebsite](docs/sdks/dem/README.md#deletewebsite) - Delete website
* [getWebsiteOutageStatuses](docs/sdks/dem/README.md#getwebsiteoutagestatuses) - Get outage statuses
* [pauseWebsiteMonitoring](docs/sdks/dem/README.md#pausewebsitemonitoring) - Pause monitoring of a website
* [getWebsiteTestResults](docs/sdks/dem/README.md#getwebsitetestresults) - Get test results
* [unpauseWebsiteMonitoring](docs/sdks/dem/README.md#unpausewebsitemonitoring) - Unpause monitoring of a website

### [Entities](docs/sdks/entities/README.md)

* [listEntities](docs/sdks/entities/README.md#listentities) - Get a list of entities by type. A returned empty list indicates no entities matched the given parameters.
* [getEntityById](docs/sdks/entities/README.md#getentitybyid) - Get an entity by ID
* [updateEntityById](docs/sdks/entities/README.md#updateentitybyid) - Update an entity by ID

### [Logs](docs/sdks/logs/README.md)

* [searchLogs](docs/sdks/logs/README.md#searchlogs) - Search logs
* [listLogArchives](docs/sdks/logs/README.md#listlogarchives) - Retrieve location and metadata of log archives

### [Metadata](docs/sdks/metadata/README.md)

* [listEntityTypes](docs/sdks/metadata/README.md#listentitytypes) - List all entity types
* [listMetricsForEntityType](docs/sdks/metadata/README.md#listmetricsforentitytype) - List metrics metadata for an entity type

### [Metrics](docs/sdks/metrics/README.md)

* [listMetrics](docs/sdks/metrics/README.md#listmetrics) - List metrics
* [createCompositeMetric](docs/sdks/metrics/README.md#createcompositemetric) - Create composite metric
* [listMultiMetricMeasurements](docs/sdks/metrics/README.md#listmultimetricmeasurements) - List measurements for a batch of metrics
* [getMetricByName](docs/sdks/metrics/README.md#getmetricbyname) - Get metric info by name
* [updateCompositeMetric](docs/sdks/metrics/README.md#updatecompositemetric) - Update composite metric
* [deleteCompositeMetric](docs/sdks/metrics/README.md#deletecompositemetric) - Delete composite metric
* [listMetricAttributes](docs/sdks/metrics/README.md#listmetricattributes) - List metric attribute names
* [listMetricAttributeValues](docs/sdks/metrics/README.md#listmetricattributevalues) - List metric attribute values
* [listMetricMeasurements](docs/sdks/metrics/README.md#listmetricmeasurements) - List metric measurement values, grouped by attributes, filtered by the filter. An empty list indicates no data points are available for the given parameters.

### [Tokens](docs/sdks/tokens/README.md)

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
- [`cloudAccountsActivateAwsIntegration`](docs/sdks/cloudaccounts/README.md#activateawsintegration) - Activate AWS Integration
- [`cloudAccountsCreateOrgStructure`](docs/sdks/cloudaccounts/README.md#createorgstructure) - Create Organizational Structure
- [`cloudAccountsUpdateAwsIntegration`](docs/sdks/cloudaccounts/README.md#updateawsintegration) - Update AWS Integration
- [`dboDeleteDatabase`](docs/sdks/dbo/README.md#deletedatabase) - Delete an observed database
- [`dboGetConfig`](docs/sdks/dbo/README.md#getconfig) - Get organization-level configuration for database observability agents/plugins
- [`dboGetPluginConfig`](docs/sdks/dbo/README.md#getpluginconfig) - Get configuration of plugins observing a database
- [`dboGetPlugins`](docs/sdks/dbo/README.md#getplugins) - Get status of plugins observing a database
- [`dboGetPublicKey`](docs/sdks/dbo/README.md#getpublickey) - Get public key for encrypting database credentials locally
- [`dboObserveDatabase`](docs/sdks/dbo/README.md#observedatabase) - Add database observability to a database
- [`dboPluginOperation`](docs/sdks/dbo/README.md#pluginoperation) - Apply an operation on a database observability plugin
- [`dboSetConfig`](docs/sdks/dbo/README.md#setconfig) - Set organization-level configuration for database observability agents/plugins
- [`dboUnobserveDatabase`](docs/sdks/dbo/README.md#unobservedatabase) - Unobserve an observed database
- [`dboUpdateDatabase`](docs/sdks/dbo/README.md#updatedatabase) - Update an observed database
- [`demCreateTransaction`](docs/sdks/dem/README.md#createtransaction) - Create transaction monitoring configuration
- [`demCreateUri`](docs/sdks/dem/README.md#createuri) - Create URI monitoring configuration
- [`demCreateWebsite`](docs/sdks/dem/README.md#createwebsite) - Create website monitoring configuration
- [`demDeleteTransaction`](docs/sdks/dem/README.md#deletetransaction) - Delete transaction
- [`demDeleteUri`](docs/sdks/dem/README.md#deleteuri) - Delete URI
- [`demDeleteWebsite`](docs/sdks/dem/README.md#deletewebsite) - Delete website
- [`demGetDemSettings`](docs/sdks/dem/README.md#getdemsettings) - Get DEM settings
- [`demGetTransaction`](docs/sdks/dem/README.md#gettransaction) - Get transaction monitoring configuration
- [`demGetUri`](docs/sdks/dem/README.md#geturi) - Get URI monitoring configuration
- [`demGetUriOutageStatuses`](docs/sdks/dem/README.md#geturioutagestatuses) - Get outage statuses
- [`demGetUriTestResults`](docs/sdks/dem/README.md#geturitestresults) - Get test results
- [`demGetWebsite`](docs/sdks/dem/README.md#getwebsite) - Get website monitoring configuration
- [`demGetWebsiteOutageStatuses`](docs/sdks/dem/README.md#getwebsiteoutagestatuses) - Get outage statuses
- [`demGetWebsiteTestResults`](docs/sdks/dem/README.md#getwebsitetestresults) - Get test results
- [`demListProbes`](docs/sdks/dem/README.md#listprobes) - Get a list of existing synthetic probes
- [`demPauseTransactionMonitoring`](docs/sdks/dem/README.md#pausetransactionmonitoring) - Pause monitoring of the transaction
- [`demPauseUriMonitoring`](docs/sdks/dem/README.md#pauseurimonitoring) - Pause monitoring of the URI
- [`demPauseWebsiteMonitoring`](docs/sdks/dem/README.md#pausewebsitemonitoring) - Pause monitoring of a website
- [`demSetDemSettings`](docs/sdks/dem/README.md#setdemsettings) - Set DEM settings
- [`demUnpauseTransactionMonitoring`](docs/sdks/dem/README.md#unpausetransactionmonitoring) - Unpause monitoring of the transaction
- [`demUnpauseUriMonitoring`](docs/sdks/dem/README.md#unpauseurimonitoring) - Unpause monitoring of the URI
- [`demUnpauseWebsiteMonitoring`](docs/sdks/dem/README.md#unpausewebsitemonitoring) - Unpause monitoring of a website
- [`demUpdateTransaction`](docs/sdks/dem/README.md#updatetransaction) - Update transaction monitoring configuration
- [`demUpdateUri`](docs/sdks/dem/README.md#updateuri) - Update URI monitoring configuration
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
- [`metricsListMultiMetricMeasurements`](docs/sdks/metrics/README.md#listmultimetricmeasurements) - List measurements for a batch of metrics
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
  const result = await swo.dem.getUriOutageStatuses({
    entityId: "<id>",
    startTime: new Date("2025-01-07T04:04:57.949Z"),
    endTime: new Date("2026-12-19T15:16:56.899Z"),
  });

  for await (const page of result) {
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

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`SwoError`](./src/models/errors/swoerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";
import * as errors from "@solarwinds/swo-sdk-typescript/models/errors";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  try {
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
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.SwoError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.CommonBadRequestErrorResponse) {
        console.log(error.data$.message); // string
        console.log(error.data$.target); // string
        console.log(error.data$.code); // errors.CommonBadRequestErrorResponseCode
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`SwoError`](./src/models/errors/swoerror.ts): The base class for HTTP error responses.
  * [`CommonUnauthorizedErrorResponse`](./src/models/errors/commonunauthorizederrorresponse.ts): Access is unauthorized. Status code `401`.
  * [`CommonInternalErrorResponse`](./src/models/errors/commoninternalerrorresponse.ts): Server error. Status code `500`.

<details><summary>Less common errors (12)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`SwoError`](./src/models/errors/swoerror.ts)**:
* [`CommonBadRequestErrorResponse`](./src/models/errors/commonbadrequesterrorresponse.ts): The server could not understand the request due to invalid syntax. Status code `400`. Applicable to 36 of 56 methods.*
* [`CommonNotFoundErrorResponse`](./src/models/errors/commonnotfounderrorresponse.ts): The server cannot find the requested resource. Status code `404`. Applicable to 33 of 56 methods.*
* [`MetricsMetricForbiddenErrorResponse`](./src/models/errors/metricsmetricforbiddenerrorresponse.ts): Access is forbidden. Status code `403`. Applicable to 2 of 56 methods.*
* [`CommonForbiddenErrorResponse`](./src/models/errors/commonforbiddenerrorresponse.ts): Access is forbidden. Status code `403`. Applicable to 1 of 56 methods.*
* [`CommonConflictErrorResponse`](./src/models/errors/commonconflicterrorresponse.ts): The request conflicts with the current state of the server. Status code `409`. Applicable to 1 of 56 methods.*
* [`CommonUnavailableErrorResponse`](./src/models/errors/commonunavailableerrorresponse.ts): Service unavailable. Status code `503`. Applicable to 1 of 56 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
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
  serverIdx: 0,
  region: "na-01",
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

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@solarwinds/swo-sdk-typescript/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
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

const sdk = new Swo({ httpClient: httpClient });
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
