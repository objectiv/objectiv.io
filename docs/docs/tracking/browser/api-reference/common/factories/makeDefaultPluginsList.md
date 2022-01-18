# makeDefaultPluginsList

Generates the default list of [TrackerPlugin](/tracking/api-reference/core/TrackerPlugin.md) for [Browser Tracker](/tracking/api-reference/general/BrowserTracker.md).

```typescript
makeDefaultPluginsList = (trackerConfig: BrowserTrackerConfig) => TrackerPluginInterface[]
```

## Parameters
|          |                   | type                                                                                | default value
| :-:      | :--               | :--                                                                                 | :--           
| required | **trackerConfig** | [BrowserTrackerConfig](/tracking/api-reference/definitions/BrowserTrackerConfig.md) |

## Returns
Array of [TrackerPlugin](/tracking/api-reference/core/TrackerPlugin.md) instances
