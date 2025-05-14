# CaptureMethod

Method for capturing metrics from database server: sniff/profiler/slow-log/poll, ignored for SqlServer and Redis

## Example Usage

```typescript
import { CaptureMethod } from "@solarwinds/swo-sdk-typescript/models/components";

let value: CaptureMethod = "slow-log";
```

## Values

```typescript
"sniffer" | "poll" | "profiler" | "slow-log"
```