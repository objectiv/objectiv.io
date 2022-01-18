# makeBlurEventHandler

A factory returning an [Event Handler](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers) to attach to new [TaggedElements](/tracking/api-reference/definitions/TaggedElement.md).

The returned handler will trigger [trackInputChangeEvent](/tracking/api-reference/eventTrackers/trackInputChangeEvent.md) automatically if the given TaggedElement has the [TaggingAttribute.trackBlurs](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetrackblurs) set.

```typescript
const makeBlurEventHandler = (
  element: TaggedElement, 
  tracker?: BrowserTracker
) => EventHandler
```

## Parameters
|          |             | type                                                                  | default value
| :-:      | :--         | :--                                                                   | :--           
| required | **element** | [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md) |
| optional | tracker     | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)   |


## Returns 
[Event Handler](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers)

<br />

:::info see also
- [makeClickEventHandler](/tracking/api-reference/mutationObserver/makeClickEventHandler.md)
:::
