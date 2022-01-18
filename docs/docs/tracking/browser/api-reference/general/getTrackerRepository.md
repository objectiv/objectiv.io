# getTrackerRepository

Retrieves the [TrackerRepository](/tracking/api-reference/core/TrackerRepository.md) instance from the [Objectiv Window](/tracking/api-reference/common/objectivWindowInterface.md).

```typescript
const getTrackerRepository = () => TrackerRepository<BrowserTracker>
```

## Returns
[TrackerRepository](/tracking/api-reference/core/TrackerRepository.md)

## Throws
Error. If [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) does not exist.
