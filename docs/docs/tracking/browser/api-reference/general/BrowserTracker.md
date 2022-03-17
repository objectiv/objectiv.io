# BrowserTracker

Browser Tracker extends [Core Tracker](/tracking/browser/api-reference/core/Tracker.md) with a simplified constructor and some preconfigured [Plugins](/tracking/browser/api-reference/core/TrackerPlugins.md).

:::tip
The recommended way of creating Browser Tracker Instances is to use either [makeTracker](/tracking/browser/api-reference/general/makeTracker.md) or [getOrMakeTracker](/tracking/browser/api-reference/general/getOrMakeTracker.md).

These helper methods will also push the new instance in [TrackerRepository](/tracking/browser/api-reference/core/TrackerRepository.md) and initiate auto-tracking automatically.
:::

### Configuration
[BrowserTrackerConfig](/tracking/browser/api-reference/definitions/BrowserTrackerConfig.md)

|          |                                 | type                                                                           | default value                                                                                                                                  |
|:--------:|:--------------------------------|:-------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------|
| required | **applicationId**               | string                                                                         |                                                                                                                                                |
| optional | trackerId                       | string                                                                         | Same value as `applicationId`                                                                                                                  |
| optional | queue                           | [TrackerQueue](/tracking/browser/api-reference/core/TrackerQueue.md)           | The result of [makeBrowserTrackerDefaultQueue](/tracking/browser/api-reference/common/factories/makeBrowserTrackerDefaultQueue.md)             |
| optional | **_endpoint_**                  | string                                                                         |                                                                                                                                                |
| optional | **_transport_**                 | [TrackerTransport](/tracking/browser/api-reference/core/TrackerTransport.md)   | The result of [makeBrowserTrackerDefaultTransport](/tracking/browser/api-reference/common/factories/makeBrowserTrackerDefaultTransport.md)     |
| optional | plugins                         | [TrackerPlugins](/tracking/browser/api-reference/core/TrackerPlugins.md)       | The result of [makeBrowserTrackerDefaultPluginsList](/tracking/browser/api-reference/common/factories/makeBrowserTrackerDefaultPluginsList.md) |
| optional | active                          | boolean                                                                        | `true`                                                                                                                                         |
| optional | trackApplicationContext         | boolean                                                                        | `true`                                                                                                                                         |
| optional | trackHttpContext                | boolean                                                                        | `true`                                                                                                                                         |
| optional | trackPathContextFromURL         | boolean                                                                        | `true`                                                                                                                                         |
| optional | trackRootLocationContextFromURL | boolean                                                                        | `true`                                                                                                                                         |
| optional | trackApplicationLoadedEvent     | boolean                                                                        | `true`                                                                                                                                         |

:::caution
`endpoint` and `transport` are mutually exclusive. While both optional, either one must be specified.

When providing only `endpoint`, the Tracker will automatically create a Transport configuration initialized with it.
:::
### Transport
[Fetch](/tracking/browser/api-reference/transports/FetchAPITransport.md) + [XMLHttpRequest](/tracking/browser/api-reference/transports/XMLHttpRequestTransport.md) Transport Switch.

### Queueing
TrackerQueue is configured to send events in batches of 10 every 100ms.  

### Persistence
TrackerQueue is configured to use [LocalStorage](/tracking/browser/api-reference/queues/TrackerQueueLocalStorage.md) to ensure events are persisted across sessions.

### Retry logic
Configured for 10 retries with exponential backoff starting at 1000ms.

### Plugins
Browser Tracker comes preconfigured with the following plugins:
- ApplicationContextPlugin (inherited from Core Tracker)
- HttpContextPlugin
- PathContextFromURLPlugin
- RootLocationContextFromURLPlugin

## Under the hood
To get an idea of how much Browser Tracker automates under the hood, this statement:

```typescript
 const tracker = new BrowserTracker({ 
  applicationId: 'app-id', 
  endpoint: 'https://collector.app.dev'
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

<br />

:::info see also
- [makeTracker](/tracking/browser/api-reference/general/makeTracker.md)
- [getOrMakeTracker](/tracking/browser/api-reference/general/getOrMakeTracker.md)
- [BrowserTrackerConfig](/tracking/browser/api-reference/definitions/BrowserTrackerConfig.md)
- [makeBrowserTrackerDefaultTransport](/tracking/browser/api-reference/common/factories/makeBrowserTrackerDefaultTransport.md)
- [makeBrowserTrackerDefaultQueue](/tracking/browser/api-reference/common/factories/makeBrowserTrackerDefaultQueue.md)
- [makeBrowserTrackerDefaultPluginsList](/tracking/browser/api-reference/common/factories/makeBrowserTrackerDefaultPluginsList.md)
- [FetchAPITransport](/tracking/browser/api-reference/transports/FetchAPITransport.md)
- [XMLHttpRequestTransport](/tracking/browser/api-reference/transports/XMLHttpRequestTransport.md)
- [TrackerQueueLocalStorageStore](/tracking/browser/api-reference/queues/TrackerQueueLocalStorage.md)
:::
