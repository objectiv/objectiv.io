# stopAutoTracking

Stops and destroys the automatic tracking [Mutation Observer](/tracking/browser/api-reference/mutationObserver/overview.md).

```typescript
const stopAutoTracking = () => void
```

:::caution
`stopAutoTracking` only real purpose is to allow for re-configuration by subsequently calling [startAutoTracking](/tracking/browser/api-reference/general/startAutoTracking.md) again.  

To effectively stop tracking, see either [TrackerRepository](/tracking/browser/api-reference/core/TrackerRepository.md) `activateAll` and `deactivateAll` or [Tracker](/tracking/browser/api-reference/core/Tracker.md) `setActive` methods.   
:::

:::info see also
- [startAutoTracking](/tracking/browser/api-reference/general/startAutoTracking.md)
- [makeTracker](/tracking/browser/api-reference/general/makeTracker.md)
- [getOrMakeTracker](/tracking/browser/api-reference/general/getOrMakeTracker.md)
- [TrackerRepository](/tracking/browser/api-reference/core/TrackerRepository.md)
:::
