# FlushQueueOptions

[TrackClicksOptions.waitUntilTracked.flushQueue](/tracking/browser/api-reference/definitions/TrackClicksOptions.md) option value.

```typescript
type FlushQueueOptions = false | true | 'onTimeout';
```

## Value meaning
|             |                        
| :--         | :--                    
| `false`       | Click Handler, after invoking [waitForQueue](/tracking/browser/api-reference/core/Tracker.md#waitforqueue), will never invoke [flushQueue](/tracking/browser/api-reference/core/Tracker.md#flushqueue)                 
| `true`        | Click Handler, after invoking [waitForQueue](/tracking/browser/api-reference/core/Tracker.md#waitforqueue), will always invoke [flushQueue](/tracking/browser/api-reference/core/Tracker.md#flushqueue)
| `'onTimeout'` | Click Handler will invoke [flushQueue](/tracking/browser/api-reference/core/Tracker.md#flushqueue) only if [waitForQueue](/tracking/browser/api-reference/core/Tracker.md#waitforqueue) timed out

<br/>

:::info see also
- [TaggingAttribute.trackClicks](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributetrackclicks)
- [TaggingAttribute.trackClicks.waitUntilTracked](/tracking/browser/api-reference/definitions/WaitUntilTrackedOptions.md)
:::
