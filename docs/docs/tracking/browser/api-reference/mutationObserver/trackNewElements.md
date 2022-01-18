# trackNewElements

Invoked by the [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) [Callback](/tracking/api-reference/mutationObserver/makeMutationCallback.md) when detecting Nodes added to the DOM. 

Finds all [TaggedElements](/tracking/api-reference/definitions/TaggedElement.md), including the given one, and invokes [trackNewElement](/tracking/api-reference/mutationObserver/trackNewElement.md) for each of them.

For every node with [TaggingAttribute.tagChildren](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetagchildren) it invokes [processTagChildrenElement](/tracking/api-reference/mutationObserver/processTagChildrenElement.md) and then and invokes [trackNewElement](/tracking/api-reference/mutationObserver/trackNewElement.md) for those as well.

```typescript
const trackNewElements = (
  element: Element, 
  tracker: BrowserTracker, 
  console?: TrackerConsole
) => void
```

## Parameters
|          |             | type                                                                | default value
| :-:      | :--         | :--                                                                 | :--           
| required | **element** | [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) |
| required | **tracker** | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md) |
| optional | console     | [TrackerConsole](/tracking/api-reference/core/TrackerConsole.md)    |

<br/>

:::info see also
- [makeMutationCallback](/tracking/api-reference/mutationObserver/makeMutationCallback.md)
- [trackNewElement](/tracking/api-reference/mutationObserver/trackNewElement.md)
- [processTagChildrenElement](/tracking/api-reference/mutationObserver/processTagChildrenElement.md)
:::
