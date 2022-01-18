# stopAutoTracking

Stops and destroys the automatic tracking [Mutation Observer](/tracking/api-reference/mutationObserver/overview.md).

```typescript
const stopAutoTracking = () => void
```

:::caution
`stopAutoTracking` only real purpose is to allow for re-configuration by subsequently calling [startAutoTracking](/tracking/api-reference/general/startAutoTracking.md) again.  

To effectively stop tracking, see either [TrackerRepository](/tracking/api-reference/core/TrackerRepository.md) `activateAll` and `deactivateAll` or [Tracker](/tracking/api-reference/core/Tracker.md) `setActive` methods.   
:::

:::info see also
- [startAutoTracking](/tracking/api-reference/general/startAutoTracking.md)
- [makeTracker](/tracking/api-reference/general/makeTracker.md)
- [getOrMakeTracker](/tracking/api-reference/general/getOrMakeTracker.md)
- [TrackerRepository](/tracking/api-reference/core/TrackerRepository.md)
:::
