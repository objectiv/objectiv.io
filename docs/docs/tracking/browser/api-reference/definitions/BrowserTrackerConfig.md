# BrowserTrackerConfig

Object used to construct BrowserTracker instances. 

BrowserTrackerConfig extends the Core [TrackerConfig](/tracking/browser/api-reference/core/TrackerConfig.md). 

```typescript
type BrowserTrackerConfig = TrackerConfig & {
  endpoint?: string;
  trackApplicationLoadedEvent?: boolean;
};
```

The resulting complete definition is:
```typescript
type BrowserTrackerConfig = {
  applicationId: string;
  trackerId?: string;
  queue?: TrackerQueueInterface;
  transport?: TrackerTransportInterface;
  plugins?: TrackerPlugins;
  active?: boolean;  
  endpoint?: string;
  trackApplicationLoadedEvent?: boolean;
  trackApplicationContext?: boolean;
  trackHttpContext?: boolean;
  trackPathContextFromURL?: boolean;
  trackRootLocationContextFromURL?: boolean;
};
```

:::info
Browser Tracker can be configured in an easier way, as opposed to the Core Tracker, by specifying just an `endpoint`.  
Internally it will automatically configure the Transport layer for the given `endpoint` with sensible defaults.
:::

## Attributes
|           |          |                                 | type                                                                         | default value                                                                                                                                                                 |
|:----------|:--------:|:--------------------------------|:-----------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| inherited | required | **applicationId**               | string                                                                       |                                                                                                                                                                               |
| inherited | optional | trackerId                       | string                                                                       | Same value as `applicationId`                                                                                                                                                 |
| inherited | optional | queue                           | [TrackerQueue](/tracking/browser/api-reference/core/TrackerQueue.md)         | The result of [makeBrowserTrackerDefaultQueue](/tracking/browser/api-reference/common/factories/makeBrowserTrackerDefaultQueue.md)                                            |
| inherited | optional | **_transport_**                 | [TrackerTransport](/tracking/browser/api-reference/core/TrackerTransport.md) | The result of [makeBrowserTrackerDefaultTransport](/tracking/browser/api-reference/common/factories/makeBrowserTrackerDefaultTransport.md)                                    |
| inherited | optional | plugins                         | [TrackerPlugins](/tracking/browser/api-reference/core/TrackerPlugins.md)     | TrackerPlugins initiated with the result of [makeBrowserTrackerDefaultPluginsList](/tracking/browser/api-reference/common/factories/makeBrowserTrackerDefaultPluginsList.md)  | 
| inherited | optional | active                          | boolean                                                                      | `true`                                                                                                                                                                        |
| own       | optional | **_endpoint_**                  | string                                                                       |                                                                                                                                                                               |
| own       | optional | trackApplicationLoadedEvent     | boolean                                                                      | `true`                                                                                                                                                                        |
| inherited | optional | trackApplicationContext         | boolean                                                                      | `true`                                                                                                                                                                        |
| own       | optional | trackHttpContext                | boolean                                                                      | `true`                                                                                                                                                                        |
| own       | optional | trackPathContextFromURL         | boolean                                                                      | `true`                                                                                                                                                                        |
| own       | optional | trackRootLocationContextFromURL | boolean                                                                      | `true`                                                                                                                                                                        |

:::caution
`endpoint` and `transport` are mutually exclusive. While both optional, either one must be specified.

When providing only `endpoint`, the Tracker will automatically create a Transport configuration initialized with it.
:::

<br/>

:::info see also
- [TrackerConfig](/tracking/browser/api-reference/core/TrackerConfig.md)
- [compareTrackerConfigs](/tracking/browser/api-reference/common/compareTrackerConfigs.md)
- [makeTracker](/tracking/browser/api-reference/general/makeTracker.md)
- [getOrMakeTracker](/tracking/browser/api-reference/general/getOrMakeTracker.md)
:::
