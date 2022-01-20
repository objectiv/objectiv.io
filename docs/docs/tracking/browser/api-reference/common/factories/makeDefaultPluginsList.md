# makeDefaultPluginsList

Generates the default list of [TrackerPlugin](/tracking/browser/api-reference/core/TrackerPlugin.md) for [Browser Tracker](/tracking/browser/api-reference/general/BrowserTracker.md).

```typescript
makeDefaultPluginsList = (trackerConfig: BrowserTrackerConfig) => TrackerPluginInterface[]
```

## Parameters
|          |                   | type                                                                                | default value
| :-:      | :--               | :--                                                                                 | :--           
| required | **trackerConfig** | [BrowserTrackerConfig](/tracking/browser/api-reference/definitions/BrowserTrackerConfig.md) |

## Returns
Array of [TrackerPlugin](/tracking/browser/api-reference/core/TrackerPlugin.md) instances
