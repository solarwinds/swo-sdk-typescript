# CloudAccounts

## Overview

### Available Operations

* [activateAwsIntegration](#activateawsintegration) - Activate AWS Integration
* [createOrgStructure](#createorgstructure) - Create Organizational Structure
* [updateAwsIntegration](#updateawsintegration) - Update AWS Integration

## activateAwsIntegration

Activate AWS Integration.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="activateAwsIntegration" method="post" path="/v1/cloud/aws/controlTower/activate" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  await swo.cloudAccounts.activateAwsIntegration({
    managementAccountId: "<id>",
    accountId: "<id>",
    enable: true,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { cloudAccountsActivateAwsIntegration } from "@solarwinds/swo-sdk-typescript/funcs/cloudAccountsActivateAwsIntegration.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await cloudAccountsActivateAwsIntegration(swo, {
    managementAccountId: "<id>",
    accountId: "<id>",
    enable: true,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("cloudAccountsActivateAwsIntegration failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CloudAccountsAwsActivateIntegrationRequest](../../models/components/cloudaccountsawsactivateintegrationrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CommonBadRequestErrorResponse   | 400                                    | application/json                       |
| errors.CommonUnauthorizedErrorResponse | 401                                    | application/json                       |
| errors.CommonNotFoundErrorResponse     | 404                                    | application/json                       |
| errors.CommonInternalErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## createOrgStructure

Create AWS Organizational Structure.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createOrgStructure" method="post" path="/v1/cloud/aws/controlTower/createOrgStructure" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  await swo.cloudAccounts.createOrgStructure({
    mgmtAccountId: "<id>",
    structure: [],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { cloudAccountsCreateOrgStructure } from "@solarwinds/swo-sdk-typescript/funcs/cloudAccountsCreateOrgStructure.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await cloudAccountsCreateOrgStructure(swo, {
    mgmtAccountId: "<id>",
    structure: [],
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("cloudAccountsCreateOrgStructure failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CloudAccountsAwsOrganisationalUnitRequest](../../models/components/cloudaccountsawsorganisationalunitrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CommonBadRequestErrorResponse   | 400                                    | application/json                       |
| errors.CommonUnauthorizedErrorResponse | 401                                    | application/json                       |
| errors.CommonNotFoundErrorResponse     | 404                                    | application/json                       |
| errors.CommonInternalErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## updateAwsIntegration

Update AWS Integration details.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAwsIntegration" method="post" path="/v1/cloud/aws/controlTower/update" -->
```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.cloudAccounts.updateAwsIntegration({
    managementAccountId: "<id>",
    accountId: "<id>",
    accountName: "<value>",
    roleArn: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SwoCore } from "@solarwinds/swo-sdk-typescript/core.js";
import { cloudAccountsUpdateAwsIntegration } from "@solarwinds/swo-sdk-typescript/funcs/cloudAccountsUpdateAwsIntegration.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await cloudAccountsUpdateAwsIntegration(swo, {
    managementAccountId: "<id>",
    accountId: "<id>",
    accountName: "<value>",
    roleArn: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("cloudAccountsUpdateAwsIntegration failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CloudAccountsAwsUpdateIntegrationRequest](../../models/components/cloudaccountsawsupdateintegrationrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CloudAccountsAwsUpdateIntegrationResponse](../../models/components/cloudaccountsawsupdateintegrationresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CommonBadRequestErrorResponse   | 400                                    | application/json                       |
| errors.CommonUnauthorizedErrorResponse | 401                                    | application/json                       |
| errors.CommonInternalErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |