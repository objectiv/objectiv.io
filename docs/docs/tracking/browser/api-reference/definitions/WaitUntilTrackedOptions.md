# WaitUntilTrackedOptions

Options to configure how [TaggingAttribute.trackClicks](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributetrackclicks) handles waiting for TrackerQueue and possibly flushing it.

```jsx
type WaitUntilTrackedOptions = {
  intervalMs?: number;
  timeoutMs?: number;
  flushQueue?: FlushQueueOptions;
};
```

<br />

:::info see also
- [WaitUntilTrackedOptions](/tracking/browser/api-reference/definitions/WaitUntilTrackedOptions.md)
- [TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)
- [TrackClicksAttribute](/tracking/browser/api-reference/definitions/TrackClicksAttribute.md)
- [FlushQueueOptions](/tracking/browser/api-reference/definitions/FlushQueueOptions.md)
:::
