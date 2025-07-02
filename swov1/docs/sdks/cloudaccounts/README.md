# CloudAccounts
(*cloudAccounts*)

## Overview

### Available Operations

* [activateAwsIntegration](#activateawsintegration) - Activate AWS Integration
* [createOrgStructure](#createorgstructure) - Create Organizational Structure
* [updateAwsIntegration](#updateawsintegration) - Update AWS Integration
* [validateMgmtAccountOnboarding](#validatemgmtaccountonboarding) - Validate Management Account Onboarding

## activateAwsIntegration

Activate AWS Integration.

### Example Usage

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
| `request`                                                                                                                                                                      | [components.ActivateAwsIntegrationRequest](../../models/components/activateawsintegrationrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.ActivateAwsIntegrationBadRequestError     | 400                                              | application/json                                 |
| errors.ActivateAwsIntegrationUnauthorizedError   | 401                                              | application/json                                 |
| errors.ActivateAwsIntegrationNotFoundError       | 404                                              | application/json                                 |
| errors.ActivateAwsIntegrationInternalServerError | 500                                              | application/json                                 |
| errors.APIError                                  | 4XX, 5XX                                         | \*/\*                                            |

## createOrgStructure

Create AWS Organizational Structure.

### Example Usage

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
| `request`                                                                                                                                                                      | [components.AwsOrganisationalUnitRequest](../../models/components/awsorganisationalunitrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.CreateOrgStructureBadRequestError     | 400                                          | application/json                             |
| errors.CreateOrgStructureUnauthorizedError   | 401                                          | application/json                             |
| errors.CreateOrgStructureNotFoundError       | 404                                          | application/json                             |
| errors.CreateOrgStructureInternalServerError | 500                                          | application/json                             |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |

## updateAwsIntegration

Update AWS Integration details.

### Example Usage

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
| `request`                                                                                                                                                                      | [components.UpdateAwsIntegrationRequest](../../models/components/updateawsintegrationrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UpdateAwsIntegrationResponse](../../models/components/updateawsintegrationresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.UpdateAwsIntegrationBadRequestError     | 400                                            | application/json                               |
| errors.UpdateAwsIntegrationUnauthorizedError   | 401                                            | application/json                               |
| errors.UpdateAwsIntegrationInternalServerError | 500                                            | application/json                               |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |

## validateMgmtAccountOnboarding

Validate if the management account is onboarded.

### Example Usage

```typescript
import { Swo } from "@solarwinds/swo-sdk-typescript";

const swo = new Swo({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const result = await swo.cloudAccounts.validateMgmtAccountOnboarding({
    request: {
      managementAccountId: "<id>",
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
import { cloudAccountsValidateMgmtAccountOnboarding } from "@solarwinds/swo-sdk-typescript/funcs/cloudAccountsValidateMgmtAccountOnboarding.js";

// Use `SwoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const swo = new SwoCore({
  apiToken: process.env["SWO_API_TOKEN"] ?? "",
});

async function run() {
  const res = await cloudAccountsValidateMgmtAccountOnboarding(swo, {
    request: {
      managementAccountId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("cloudAccountsValidateMgmtAccountOnboarding failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ValidateMgmtAccountOnboardingRequest](../../models/operations/validatemgmtaccountonboardingrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MgmtAccountOnboardingResponse](../../models/components/mgmtaccountonboardingresponse.md)\>**

### Errors

| Error Type                                              | Status Code                                             | Content Type                                            |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| errors.ValidateMgmtAccountOnboardingBadRequestError     | 400                                                     | application/json                                        |
| errors.ValidateMgmtAccountOnboardingUnauthorizedError   | 401                                                     | application/json                                        |
| errors.ValidateMgmtAccountOnboardingInternalServerError | 500                                                     | application/json                                        |
| errors.APIError                                         | 4XX, 5XX                                                | \*/\*                                                   |