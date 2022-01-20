# trackRemovedElements

Invoked by the [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) [Callback](/tracking/browser/api-reference/mutationObserver/makeMutationCallback.md) when detecting Nodes removed to the DOM.

Finds all [TaggedElements](/tracking/browser/api-reference/definitions/TaggedElement.md), including the given one, and invokes [trackRemovedElement](/tracking/browser/api-reference/mutationObserver/trackRemovedElement.md) for each of them.


```typescript
const trackRemovedElements = (
  element: Element, 
  tracker: BrowserTracker
) => void
```

## Parameters
|          |             | type                                                                | default value
| :-:      | :--         | :--                                                                 | :--           
| required | **element** | [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) |
| required | **tracker** | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md) |

<br/>

:::info see also
- [makeMutationCallback](/tracking/browser/api-reference/mutationObserver/makeMutationCallback.md)
- [trackRemovedElement](/tracking/browser/api-reference/mutationObserver/trackRemovedElement.md)
:::
