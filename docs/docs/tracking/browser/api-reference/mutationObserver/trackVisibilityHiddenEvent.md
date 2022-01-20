# trackVisibilityHiddenEvent

Checks whether to trigger a [trackHiddenEvent](/tracking/browser/api-reference/eventTrackers/trackHiddenEvent.md) event for the given [TaggedElement](/tracking/browser/api-reference/definitions/TaggedElement.md) by checking its [TaggingAttribute.trackVisibility](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributetrackvisibility).

```typescript
const trackVisibilityHiddenEvent = (
  element: TaggedElement, 
  tracker: BrowserTracker
) => void
```

## Parameters
|          |             | type                                                                  | default value
| :-:      | :--         | :--                                                                   | :--           
| required | **element** | [TaggedElement](/tracking/browser/api-reference/definitions/TaggedElement.md) |
| required | **tracker** | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)   |

<br />

:::info see also
- [makeMutationCallback](/tracking/browser/api-reference/mutationObserver/makeMutationCallback.md)
- [trackVisibilityVisibleEvent](/tracking/browser/api-reference/mutationObserver/trackVisibilityVisibleEvent.md)
:::
