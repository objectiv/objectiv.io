# TrackClicksOptions

[TaggingAttribute.trackPressEvents](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetrackclicks) are parsed onto this object via [parseTrackClickAttribute](/tracking/api-reference/common/parsers/parseTrackClicks.md).  


```typescript jsx
type TrackClicksOptions = undefined | {
  waitForQueue?: WaitForQueueOptions;
  flushQueue?: FlushQueueOptions;
};
```

:::info see also
- [parseTrackClickAttribute](/tracking/api-reference/common/parsers/parseTrackClicks.md)
- [WaitForQueueOptions](/tracking/api-reference/definitions/WaitForQueueOptions.md)
- [FlushQueueOptions](/tracking/api-reference/definitions/FlushQueueOptions.md)
- [TagLocationOptions](/tracking/api-reference/definitions/TagLocationOptions.md)
:::
