# trackRemovedElement

Given a removed [GuardableElement](/tracking/browser/api-reference/definitions/GuardableElement.md):

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
| required | **element** | [GuardableElement](/tracking/browser/api-reference/definitions/GuardableElement.md) |
| optional | tracker     | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)         |

<br />

:::info see also
- [makeMutationCallback](/tracking/browser/api-reference/mutationObserver/makeMutationCallback.md)
- [parseTrackVisibility](/tracking/browser/api-reference/common/parsers/parseTrackVisibility.md)
:::
