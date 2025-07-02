<!-- Start SDK Example Usage [usage] -->
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