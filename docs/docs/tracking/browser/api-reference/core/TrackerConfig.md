# TrackerConfig

Core Tracker configuration object.  

## Attributes
|          |                   | type                                                                 | default value
| :-:      | :--               | :--                                                                  | :--           
| required | **applicationId** | string                                                               |
| optional | trackerId         | string                                                               | Same value as `applicationId`
| optional | queue             | [TrackerQueue](/tracking/browser/api-reference/core/TrackerQueue.md)         | 
| optional | transport         | [TrackerTransport](/tracking/browser/api-reference/core/TrackerTransport.md) | 
| optional | plugins           | [TrackerPlugins](/tracking/browser/api-reference/core/TrackerPlugins.md)     | [ApplicationContextPlugin]
| optional | console           | [TrackerConsole](/tracking/browser/api-reference/core/TrackerConsole.md)     |
| optional | active            | boolean                                                              | `true`

<br/>

:::info see also
- [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)
- [BrowserTrackerConfig](/tracking/browser/api-reference/definitions/BrowserTrackerConfig.md) 
:::
