# makeClickEventHandler

A factory returning an [Event Handler](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers) to attach to new [TaggedElements](/tracking/browser/api-reference/definitions/TaggedElement.md).

The returned handler will trigger [trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md) automatically if the given TaggedElement has the [TaggingAttribute.trackClicks](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributetrackclicks) set.
It also supports a number of options to [wait](/tracking/browser/api-reference/definitions/WaitForQueueOptions.md) and / or [flush](/tracking/browser/api-reference/definitions/FlushQueueOptions.md) [TrackerQueue](/tracking/browser/api-reference/core/TrackerQueue.md). 

```typescript
const makeClickEventHandler = (
  element: TaggedElement,
  tracker?: BrowserTracker,
  trackClicksOptions?: TrackClicksOptions
) => EventHandler
```

## Parameters
|          |                    | type                                                                            | default value
| :-:      | :--                | :--                                                                             | :--           
| required | **element**        | [TaggedElement](/tracking/browser/api-reference/definitions/TaggedElement.md)           |
| optional | tracker            | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)             |
| optional | trackClicksOptions | [TrackClicksOptions](/tracking/browser/api-reference/definitions/TrackClicksOptions.md) |

## Returns
[Event Handler](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers)

<br />

:::info see also
- [makeBlurEventHandler](/tracking/browser/api-reference/mutationObserver/makeBlurEventHandler.md)
- [WaitForQueueOptions](/tracking/browser/api-reference/definitions/WaitForQueueOptions.md)
- [FlushQueueOptions](/tracking/browser/api-reference/definitions/FlushQueueOptions.md)
:::
