# BrowserTracker

Browser Tracker extends [Core Tracker](/tracking/api-reference/core/Tracker.md) with a simplified constructor and some preconfigured [Plugins](/tracking/api-reference/core/TrackerPlugins.md).

:::tip
The recommended way of creating Browser Tracker Instances is to use either [makeTracker](/tracking/api-reference/general/makeTracker.md) or [getOrMakeTracker](/tracking/api-reference/general/getOrMakeTracker.md).

These helper methods will also push the new instance in [TrackerRepository](/tracking/api-reference/core/TrackerRepository.md) and initiate auto-tracking automatically.
:::

### Configuration
[BrowserTrackerConfig](/tracking/api-reference/definitions/BrowserTrackerConfig.md)

|          |                             | type                                                                 | default value
| :-:      | :--                         | :--                                                                  | :--           
| required | **applicationId**           | string                                                               |
| optional | trackerId                   | string                                                               | Same value as `applicationId`
| optional | queue                       | [TrackerQueue](/tracking/api-reference/core/TrackerQueue.md)         | The result of [makeDefaultQueue](/tracking/api-reference/common/factories/makeDefaultQueue.md)
| optional | **_endpoint_**              | string                                                               |
| optional | **_transport_**             | [TrackerTransport](/tracking/api-reference/core/TrackerTransport.md) | The result of [makeDefaultTransport](/tracking/api-reference/common/factories/makeDefaultTransport.md)
| optional | plugins                     | [TrackerPlugins](/tracking/api-reference/core/TrackerPlugins.md)     | TrackerPlugins initiated with the result of [makeDefaultPluginsList](/tracking/api-reference/common/factories/makeDefaultPluginsList.md)
| optional | console                     | [TrackerConsole](/tracking/api-reference/core/TrackerConsole.md)     |
| optional | active                      | boolean                                                              | `true`
| optional | trackApplicationLoadedEvent | boolean                                                              | `true`

:::caution
`endpoint` and `transport` are mutually exclusive. While both optional, either one must be specified.

When providing only `endpoint`, the Tracker will automatically create a Transport configuration initialized with it.
:::
### Transport
[Fetch](/tracking/api-reference/transports/FetchAPITransport.md) + [XMLHttpRequest](/tracking/api-reference/transports/XMLHttpRequestTransport.md) Transport Switch.

### Queueing
TrackerQueue is configured to send events in batches of 10 every 100ms.  

### Persistence
TrackerQueue is configured to use [LocalStorage](/tracking/api-reference/queues/TrackerQueueLocalStorage.md) to ensure events are persisted across sessions.

### Retry logic
Configured for 10 retries with exponential backoff starting at 1000ms.

### Default Plugins
Browser Tracker comes preconfigured with the following plugins:
- ApplicationContextPlugin (inherited from Core Tracker)
- PathContextFromURLPlugin

## Under the hood
To get an idea of how much Browser Tracker automates under the hood, this statement:

```typescript
 const tracker = new BrowserTracker({ applicationId: 'app-id', endpoint: '/endpoint', console: console });
``` 

is equivalent to:

```typescript
 
 const trackerId = trackerConfig.trackerId ?? trackerConfig.applicationId;
 const console = trackerConfig.console;
 const fetch = new FetchAPITransport({ endpoint: '/endpoint', console });
 const xmlHttpRequest = new XMLHttpRequestTransport({ endpoint: '/endpoint', console });
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
- [makeTracker](/tracking/api-reference/general/makeTracker.md)
- [getOrMakeTracker](/tracking/api-reference/general/getOrMakeTracker.md)
- [BrowserTrackerConfig](/tracking/api-reference/definitions/BrowserTrackerConfig.md)
- [makeDefaultTransport](/tracking/api-reference/common/factories/makeDefaultTransport.md)
- [makeDefaultQueue](/tracking/api-reference/common/factories/makeDefaultQueue.md)
- [makeDefaultPluginsList](/tracking/api-reference/common/factories/makeDefaultPluginsList.md)
- [FetchAPITransport](/tracking/api-reference/transports/FetchAPITransport.md)
- [XMLHttpRequestTransport](/tracking/api-reference/transports/XMLHttpRequestTransport.md)
- [TrackerQueueLocalStorageStore](/tracking/api-reference/queues/TrackerQueueLocalStorage.md)
:::
