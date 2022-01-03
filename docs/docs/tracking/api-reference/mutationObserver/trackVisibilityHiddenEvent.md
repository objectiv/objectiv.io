# trackVisibilityHiddenEvent

Checks whether to trigger a [trackHiddenEvent](/tracking/api-reference/eventTrackers/trackHiddenEvent.md) event for the given [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md) by checking its [TaggingAttribute.trackVisibility](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetrackvisibility).

```typescript
const trackVisibilityHiddenEvent = (
  element: TaggedElement, 
  tracker: BrowserTracker
) => void
```

## Parameters
|          |             | type                                                                  | default value
| :-:      | :--         | :--                                                                   | :--           
| required | **element** | [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md) |
| required | **tracker** | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)   |

<br />

:::info see also
- [makeMutationCallback](/tracking/api-reference/mutationObserver/makeMutationCallback.md)
- [trackVisibilityVisibleEvent](/tracking/api-reference/mutationObserver/trackVisibilityVisibleEvent.md)
:::
