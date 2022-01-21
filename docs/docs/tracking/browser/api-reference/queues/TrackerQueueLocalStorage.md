# TrackerQueueLocalStorage

A [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) implementation of a [TrackerQueueStore](/tracking/browser/api-reference/core/TrackerQueue.md#trackerqueuestore). 

Whenever JavaScript gets reloaded across sessions, for example when following a link, this Queue ensures Events are not lost.

:::info
Each Tracker instance has its own LocalStorage key since they are postfixed with the unique `trackerId`:

```typescript
objectiv-events-queue-{trackerId}
```

:::
