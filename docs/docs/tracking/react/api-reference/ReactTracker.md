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

|          |                                 | type             | default value                                                                                                                            |
|:--------:|:--------------------------------|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| required | **applicationId**               | string           |                                                                                                                                          |
| optional | **_endpoint_**                  | string           |                                                                                                                                          |
| optional | **_transport_**                 | TrackerTransport | The result of [makeReactTrackerDefaultTransport](/tracking/react/api-reference/common/factories/makeReactTrackerDefaultTransport.md)     |
| optional | queue                           | TrackerQueue     | The result of [makeReactTrackerDefaultQueue](/tracking/react/api-reference/common/factories/makeReactTrackerDefaultQueue.md)             |
| optional | plugins                         | TrackerPlugin    | The result of [makeReactTrackerDefaultPluginsList](/tracking/react/api-reference/common/factories/makeReactTrackerDefaultPluginsList.md) |
| optional | trackerId                       | string           | Same value as `applicationId`                                                                                                            |
| optional | active                          | boolean          | `true`                                                                                                                                   |
| optional | trackApplicationContext         | boolean          | `true`                                                                                                                                   |
| optional | trackHttpContext                | boolean          | `true`                                                                                                                                   |
| optional | trackPathContextFromURL         | boolean          | `true`                                                                                                                                   |
| optional | trackRootLocationContextFromURL | boolean          | `true`                                                                                                                                   |

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
});
``` 

is equivalent to:

```typescript
const trackerId = trackerConfig.trackerId ?? trackerConfig.applicationId;
const fetchTransport = new FetchTransport({ endpoint: 'https://collector.app.dev' });
const xhrTransport = new XHRTransport({ endpoint: 'https://collector.app.dev' });
const transportSwitch = new TransportSwitch({ transports: [fetchTransport, xhrTransport] });
const transport = new RetryTransport({ transport: transportSwitch });
const queueStorage = new LocalStorageQueueStore({ trackerId })
const trackerQueue = new TrackerQueue({ storage: trackerStorage });
const applicationContextPlugin = new ApplicationContextPlugin({ applicationId: 'app-id' });
const httpContextPlugin = new HttpContextPlugin();
const pathContextFromURLPlugin = new PathContextFromURLPlugin();
const rootLocationContextFromURLPlugin = new RootLocationContextFromURLPlugin();
const plugins = new TrackerPlugins({
  plugins: [
    applicationContextPlugin,
    httpContextPlugin,
    pathContextFromURLPlugin,
    rootLocationContextFromURLPlugin
  ]
});
const tracker = new Tracker({ transport, queue, plugins });

```
