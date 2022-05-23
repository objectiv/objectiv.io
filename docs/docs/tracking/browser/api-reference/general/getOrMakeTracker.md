# getOrMakeTracker

Retrieves a specific Tracker's instance from the [TrackerRepository](/tracking/browser/api-reference/core/TrackerRepository.md) or creates one if it doesn't exist yet.

```typescript
const getOrMakeTracker = (trackerConfig: BrowserTrackerConfig) => BrowserTracker 
```

## Returns
[BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)

## Use case
When calling [makeTracker](/tracking/browser/api-reference/general/makeTracker.md) once is not possible due to SPA concerns, like re-renders, this function can be used instead. 
It's safe to be called multiple times a long as the given configuration remains the same. Exception made for the `active` parameter.

Internally uses [compareTrackerConfig](/tracking/browser/api-reference/common/compareTrackerConfigs.md) to determine configuration equality.

### Tracker configuration collisions
An error will be logged if the given Tracker ID exists in [TrackerRepository](/tracking/browser/api-reference/core/TrackerRepository.md) but its configuration doesn't match the given one.  

This usually means that `getOrMakeTracker` is unstable and has been called multiple times with different configurations. 

When this happens, the new configuration will be ignored and the existing Tracker instance will be returned.

<br/>

:::info see also
- [BrowserTrackerConfig](/tracking/browser/api-reference/definitions/BrowserTrackerConfig.md)
- [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)
- [makeTracker](/tracking/browser/api-reference/general/makeTracker.md)
- [compareTrackerConfig](/tracking/browser/api-reference/common/compareTrackerConfigs.md)
:::
