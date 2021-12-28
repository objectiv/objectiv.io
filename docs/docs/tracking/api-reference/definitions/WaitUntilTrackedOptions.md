# WaitUntilTrackedOptions

Options to configure how [TaggingAttribute.trackPressEvents](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetrackclicks) handles waiting for TrackerQueue and possibly flushing it.

```typescript jsx
type WaitUntilTrackedOptions = {
  intervalMs?: number;
  timeoutMs?: number;
  flushQueue?: FlushQueueOptions;
};
```

<br />

:::info see also
- [WaitUntilTrackedOptions](/tracking/api-reference/definitions/WaitUntilTrackedOptions.md)
- [TagLocationOptions](/tracking/api-reference/definitions/TagLocationOptions.md)
- [TrackClicksAttribute](/tracking/api-reference/definitions/TrackClicksAttribute.md)
- [FlushQueueOptions](/tracking/api-reference/definitions/FlushQueueOptions.md)
:::
