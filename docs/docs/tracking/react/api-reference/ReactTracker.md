---
sidebar_position: 2
---

# ReactTracker

ReactTracker extends Core Tracker with a simplified constructor and some preconfigured Plugins.

## Usage
In this example we create a new ReactTracker instance and wrap our entire App in [ObjectivProvider](/tracking/react/api-reference/common/providers/ObjectivProvider.md).

```ts
import { ObjectivProvider, ReactTracker } from '@objectiv/tracker-react';
```

```tsx
const App = ({children}) => {

  const tracker = new ReactTracker({
    endpoint: 'https://collector.app.dev',
    applicationId: 'app-id'
  })

  return (
    <ObjectivProvider tracker={tracker}>
      {children}
    </ObjectivProvider>
  );
}
```

## Configuration
ReactTracker configuration requires at least an `applicationId` and either an `endpoint` or a custom `transport`.

|          |                                 | type             | default value                                                                                                                        |
|:--------:|:--------------------------------|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------|
| required | **applicationId**               | string           |                                                                                                                                      |
| optional | **_endpoint_**                  | string           |                                                                                                                                      |
| optional | **_transport_**                 | TrackerTransport | The result of [makeDefaultTransport](/tracking/react/api-reference/common/factories/makeDefaultTransport.md)                         |
| optional | console                         | TrackerConsole   | `undefined` in production, global console in dev                                                                                     |
| optional | queue                           | TrackerQueue     | The result of [makeDefaultQueue](/tracking/react/api-reference/common/factories/makeDefaultQueue.md)                                 |
| optional | plugins                         | TrackerPlugins   | TrackerPlugins with the result of [makeDefaultPluginsList](/tracking/react/api-reference/common/factories/makeDefaultPluginsList.md) |
| optional | trackerId                       | string           | Same value as `applicationId`                                                                                                        |
| optional | active                          | boolean          | `true`                                                                                                                               |
| optional | trackHttpContext                | boolean          | `true`                                                                                                                               |
| optional | trackPathContextFromURL         | boolean          | `true`                                                                                                                               |
| optional | trackRootLocationContextFromURL | boolean          | `true`                                                                                                                               |

:::caution
`endpoint` and `transport` are mutually exclusive. While both optional, either one must be specified.

When providing only `endpoint`, the Tracker will automatically create a Transport configuration initialized with it.
:::

## Defaults 

### Transport
Fetch API + XHR API Transport Switch.

### Queueing
TrackerQueue is configured to eagerly send max 10 events per batch, each batch is processed every 1000ms.  

### Persistence
TrackerQueue is configured to use localStorage.

### Retry logic
Configured for 10 retries with exponential backoff starting at 1000ms.

### Plugins
Browser Tracker comes preconfigured with the following plugins:
- ApplicationContextPlugin (inherited from Core Tracker)
- HttpContextPlugin
- PathContextFromURLPlugin
- RootLocationContextFromURLPlugin

## Under the hood
The Tracker architecture is highly composable.  
To get an idea of how much React Tracker automates under the hood, compared to the Core Tracker, this statement:

```typescript
const tracker = new ReactTracker({ 
  applicationId: 'app-id', 
  endpoint: 'https://collector.app.dev', 
  console: console
});
``` 

is equivalent to:

```typescript
const trackerId = trackerConfig.trackerId ?? trackerConfig.applicationId;
const console = trackerConfig.console;
const fetchTransport = new FetchTransport({ endpoint: 'https://collector.app.dev', console });
const xhrTransport = new XHRTransport({ endpoint: 'https://collector.app.dev', console });
const transportSwitch = new TransportSwitch({ transports: [fetchTransport, xhrTransport], console });
const transport = new RetryTransport({ transport: transportSwitch, console });
const queueStorage = new LocalStorageQueueStore({ trackerId, console })
const trackerQueue = new TrackerQueue({ storage: trackerStorage, console });
const applicationContextPlugin = new ApplicationContextPlugin({ applicationId: 'app-id', console });
const httpContextPlugin = new HttpContextPlugin({ console });
const pathContextFromURLPlugin = new PathContextFromURLPlugin({ console });
const rootLocationContextFromURLPlugin = new RootLocationContextFromURLPlugin({ console });
const plugins = new TrackerPlugins({
  plugins: [
    applicationContextPlugin,
    httpContextPlugin,
    pathContextFromURLPlugin,
    rootLocationContextFromURLPlugin
  ],
  console
});
const tracker = new Tracker({ transport, queue, plugins, console });

```
