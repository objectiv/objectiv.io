# TrackerConfig

Core Tracker configuration object.  

## Attributes
|          |                   | type                                                                 | default value
| :-:      | :--               | :--                                                                  | :--           
| required | **applicationId** | string                                                               |
| optional | trackerId         | string                                                               | Same value as `applicationId`
| optional | queue             | [TrackerQueue](/tracking/api-reference/core/TrackerQueue.md)         | 
| optional | transport         | [TrackerTransport](/tracking/api-reference/core/TrackerTransport.md) | 
| optional | plugins           | [TrackerPlugins](/tracking/api-reference/core/TrackerPlugins.md)     | [ApplicationContextPlugin]
| optional | console           | [TrackerConsole](/tracking/api-reference/core/TrackerConsole.md)     |
| optional | active            | boolean                                                              | `true`

<br/>

:::info see also
- [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)
- [BrowserTrackerConfig](/tracking/api-reference/definitions/BrowserTrackerConfig.md) 
:::
