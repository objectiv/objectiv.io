# objectivWindowInterface

If [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) exists, it extends it with a new `objectiv` namespace.  
The namespace holds an instance of [TrackerRepository](/tracking/api-reference/core/TrackerRepository.md).

```typescript
declare global {
  interface Window {
    objectiv: {
      trackers: TrackerRepository<BrowserTracker>;
    };
  }
}
```  
