# makeBlurEventHandler

A factory returning an [Event Handler](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers) to attach to new [TaggedElements](/tracking/browser/api-reference/definitions/TaggedElement.md).

The returned handler will trigger [trackInputChangeEvent](/tracking/browser/api-reference/eventTrackers/trackInputChangeEvent.md) automatically if the given TaggedElement has the [TaggingAttribute.trackBlurs](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributetrackblurs) set.

```typescript
const makeBlurEventHandler = (
  element: TaggedElement, 
  tracker?: BrowserTracker,
  trackBlursOptions?: TrackBlursOptions, 
  locationId?: string
) => EventHandler
```

## Parameters
|          |                   | type                                                                                                                  | default value
| :-:      | :--               | :--                                                                                                                   | :--           
| required | **element**       | [TaggedElement](/tracking/browser/api-reference/definitions/TaggedElement.md)                                         |
| optional | tracker           | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)                                           |
| optional | trackBlursOptions | [TrackBlursOptions](/tracking/browser/api-reference/definitions/TrackBlursOptions.md)                                 |
| optional | locationId        | string, used as [InputValueContext](/taxonomy/reference/global-contexts/InputValueContext.md) id when tracking values |


## Returns 
[Event Handler](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers)

<br />

:::info see also
- [makeClickEventHandler](/tracking/browser/api-reference/mutationObserver/makeClickEventHandler.md)
:::
