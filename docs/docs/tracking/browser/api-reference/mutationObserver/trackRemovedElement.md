# trackRemovedElement

Given a removed [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md):

- Determine whether to trigger a visibility:hidden event. 
- Remove the Element from state and effectively stop auto tracking it.

```typescript
const trackRemovedElement = (
  element: GuardableElement, 
  tracker: BrowserTracker
) => void
```

## Parameters
|          |             | type                                                                        | default value
| :-:      | :--         | :--                                                                         | :--           
| required | **element** | [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md) |
| optional | tracker     | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)         |

<br />

:::info see also
- [makeMutationCallback](/tracking/api-reference/mutationObserver/makeMutationCallback.md)
- [parseTrackVisibility](/tracking/api-reference/common/parsers/parseTrackVisibility.md)
:::
