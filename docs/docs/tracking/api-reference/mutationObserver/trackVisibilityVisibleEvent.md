# trackVisibilityVisibleEvent

Checks whether to trigger a [trackVisible](/tracking/api-reference/eventTrackers/trackVisible.md) event for the given [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md) by checking its [TaggingAttribute.trackClicks](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetrackvisibility).

```typescript
const trackVisibilityVisibleEvent = (
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
- [trackVisibilityHiddenEvent](/tracking/api-reference/mutationObserver/trackVisibilityHiddenEvent.md)
:::
