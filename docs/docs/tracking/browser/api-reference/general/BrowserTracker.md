# BrowserTracker

Browser Tracker extends [Core Tracker](/tracking/browser/api-reference/core/Tracker.md) with a simplified constructor and some preconfigured [Plugins](/tracking/browser/api-reference/core/TrackerPlugins.md).

:::tip
The recommended way of creating Browser Tracker Instances is to use either [makeTracker](/tracking/browser/api-reference/general/makeTracker.md) or [getOrMakeTracker](/tracking/browser/api-reference/general/getOrMakeTracker.md).

These helper methods will also push the new instance in [TrackerRepository](/tracking/browser/api-reference/core/TrackerRepository.md) and initiate auto-tracking automatically.
:::

### Configuration
[BrowserTrackerConfig](/tracking/browser/api-reference/definitions/BrowserTrackerConfig.md)

|          |                             | type                                                                 | default value
| :-:      | :--                         | :--                                                                  | :--           
| required | **applicationId**           | string                                                               |
| optional | trackerId                   | string                                                               | Same value as `applicationId`
| optional | queue                       | [TrackerQueue](/tracking/browser/api-reference/core/TrackerQueue.md)         | The result of [makeDefaultQueue](/tracking/browser/api-reference/common/factories/makeDefaultQueue.md)
| optional | **_endpoint_**              | string                                                               |
| optional | **_transport_**             | [TrackerTransport](/tracking/browser/api-reference/core/TrackerTransport.md) | The result of [makeDefaultTransport](/tracking/browser/api-reference/common/factories/makeDefaultTransport.md)
| optional | plugins                     | [TrackerPlugins](/tracking/browser/api-reference/core/TrackerPlugins.md)     | TrackerPlugins initiated with the result of [makeDefaultPluginsList](/tracking/browser/api-reference/common/factories/makeDefaultPluginsList.md)
| optional | console                     | [TrackerConsole](/tracking/browser/api-reference/core/TrackerConsole.md)     |
| optional | active                      | boolean                                                              | `true`
| optional | trackApplicationLoadedEvent | boolean                                                              | `true`

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

### Default Plugins
Browser Tracker comes preconfigured with the following plugins:
- ApplicationContextPlugin (inherited from Core Tracker)
- PathContextFromURLPlugin

## Under the hood
To get an idea of how much Browser Tracker automates under the hood, this statement:

```typescript
 const tracker = new BrowserTracker({ 
  applicationId: 'app-id', 
  endpoint: 'https://collector.app.dev', 
  console: console
});
``` 

is equivalent to:

```typescript
 
 const trackerId = trackerConfig.trackerId ?? trackerConfig.applicationId;
 const console = trackerConfig.console;
 const fetch = new FetchAPITransport({ endpoint: 'https://collector.app.dev', console });
 const xmlHttpRequest = new XMLHttpRequestTransport({ endpoint: 'https://collector.app.dev', console });
 const transportSwitch = new TransportSwitch({ transports: [fetch, xmlHttpRequest], console });
 const transport = new RetryTransport({ transport: transportSwitch, console });
 const queueStorage = new TrackerQueueLocalStorageStore({ trackerId, console })
 const trackerQueue = new TrackerQueue({ storage: trackerStorage, console });
 const applicationPlugin = new ApplicationContextPlugin({ applicationId: 'app-id', console });
 const pathContextPlugin = new PathContextFromURLPlugin({ console });
 const plugins = new TrackerPlugins({ plugins: [ applicationPlugin, pathContextPlugin ], console });
 const tracker = new Tracker({ transport, queue, plugins, console });
```

<br />

:::info see also
- [makeTracker](/tracking/browser/api-reference/general/makeTracker.md)
- [getOrMakeTracker](/tracking/browser/api-reference/general/getOrMakeTracker.md)
- [BrowserTrackerConfig](/tracking/browser/api-reference/definitions/BrowserTrackerConfig.md)
- [makeDefaultTransport](/tracking/browser/api-reference/common/factories/makeDefaultTransport.md)
- [makeDefaultQueue](/tracking/browser/api-reference/common/factories/makeDefaultQueue.md)
- [makeDefaultPluginsList](/tracking/browser/api-reference/common/factories/makeDefaultPluginsList.md)
- [FetchAPITransport](/tracking/browser/api-reference/transports/FetchAPITransport.md)
- [XMLHttpRequestTransport](/tracking/browser/api-reference/transports/XMLHttpRequestTransport.md)
- [TrackerQueueLocalStorageStore](/tracking/browser/api-reference/queues/TrackerQueueLocalStorage.md)
:::
