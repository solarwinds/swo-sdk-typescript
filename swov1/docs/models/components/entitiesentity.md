# EntitiesEntity

## Example Usage

```typescript
import { EntitiesEntity } from "@solarwinds/swo-sdk-typescript/models/components";

let value: EntitiesEntity = {
  id: "e-1234567890",
  type: "SyslogHost",
  name: "syslog-host-1",
  displayName: "SyslogTest",
  createdTime: new Date("2024-11-25T16:38:24Z"),
  updatedTime: new Date("2024-12-01T16:38:24Z"),
  lastSeenTime: new Date("2024-11-25T16:38:24Z"),
  inMaintenance: false,
  healthState: {
    state: "GOOD",
  },
  tags: {
    "gg.tk.token": "test",
    "kfi.tk.token": "qa-test",
  },
  attributes: {
    "protocols": [
      "HTTP",
    ],
    "features": [
      "rum",
    ],
    "isAvailabilityCheckPaused": false,
    "extensions": {
      "has_extension": true,
    },
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                            | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The ID of the entity.                                                                                                           | e-1234567890                                                                                                                    |
| `type`                                                                                                                          | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The type of the entity.                                                                                                         | SyslogHost                                                                                                                      |
| `name`                                                                                                                          | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | The name of the entity.                                                                                                         | syslog-host-1                                                                                                                   |
| `displayName`                                                                                                                   | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Entity display name / alias. This value is equal to name unless it is explicitly overridden.                                    | SyslogTest                                                                                                                      |
| `createdTime`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_minus_sign:                                                                                                              | Date and time of entity creation in UTC.                                                                                        | 2024-11-25T16:38:24Z                                                                                                            |
| `updatedTime`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_minus_sign:                                                                                                              | Date and time of last entity update in UTC.                                                                                     | 2024-12-01T16:38:24Z                                                                                                            |
| `lastSeenTime`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_check_mark:                                                                                                              | Date and time when the entity has last received telemetry in UTC.                                                               | 2024-11-25T16:38:24Z                                                                                                            |
| `inMaintenance`                                                                                                                 | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | Flag telling if given entity is in maintenance mode.                                                                            | false                                                                                                                           |
| `healthState`                                                                                                                   | [components.HealthState](../../models/components/healthstate.md)                                                                | :heavy_minus_sign:                                                                                                              | Health state of the entity.                                                                                                     | {<br/>"state": "GOOD"<br/>}                                                                                                     |
| `tags`                                                                                                                          | Record<string, *string*>                                                                                                        | :heavy_check_mark:                                                                                                              | Entity tags. Tag is a key-value pair, where there may be only a single tag value for the same key.                              | {<br/>"gg.tk.token": "test",<br/>"kfi.tk.token": "qa-test"<br/>}                                                                |
| `attributes`                                                                                                                    | Record<string, *any*>                                                                                                           | :heavy_minus_sign:                                                                                                              | Map of available attributes.                                                                                                    | {<br/>"protocols": [<br/>"HTTP"<br/>],<br/>"features": [<br/>"rum"<br/>],<br/>"isAvailabilityCheckPaused": false,<br/>"extensions": {<br/>"has_extension": true<br/>}<br/>} |