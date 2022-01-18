# compareTrackerConfigs

Compares two [TrackerConfig](/tracking/api-reference/core/TrackerConfig.md) objects ignoring mutable attributes.  

```typescript
compareTrackerConfigs = (
  trackerConfigA: TrackerConfig, 
  trackerConfigB: TrackerConfig
) => boolean
```  

## Parameters
|          |                    | type                                                           | default value
| :-:      | :--                | :--                                                            | :--           
| required | **trackerConfigA** | [TrackerConfig](/tracking/api-reference/core/TrackerConfig.md) |
| required | **trackerConfigB** | [TrackerConfig](/tracking/api-reference/core/TrackerConfig.md) |

## Returns
boolean, `true` if configurations are equivalent, `false` otherwise.
