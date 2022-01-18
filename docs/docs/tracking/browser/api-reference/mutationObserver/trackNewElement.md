# trackNewElement

Given a [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md):

- Checks its visibility in order to trigger the appropriate visibility events.
- Checks the [TaggingAttribute.trackClicks](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetrackclicks) in order to bind an EventHandler for triggering [trackPressEvent](/tracking/api-reference/eventTrackers/trackPressEvent.md) events.
- Checks the [TaggingAttribute.trackBlurs](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetrackblurs) in order to bind and EventHandler for triggering [trackInputChangeEvent](/tracking/api-reference/eventTrackers/trackInputChangeEvent.md) events.
- Decorates it with the [TaggingAttribute.tracked](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetracked) so we won't process them again.
- Checks and validates its [LocationStacks](/tracking/api-reference/core/LocationStack.md) for uniqueness.

```typescript
const trackNewElement = (
  element: GuardableElement, 
  tracker: BrowserTracker, 
  console?: TrackerConsole
) => void
```

## Parameters
|          |             | type                                                                        | default value
| :-:      | :--         | :--                                                                         | :--           
| required | **element** | [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md) |
| optional | tracker     | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)         |
| optional | console     | [TrackerConsole](/tracking/api-reference/core/TrackerConsole.md)            |

<br />

:::info see also
- [makeMutationCallback](/tracking/api-reference/mutationObserver/makeMutationCallback.md)
- [makeClickEventHandler](/tracking/api-reference/mutationObserver/makeClickEventHandler.md)
- [makeBlurEventHandler](/tracking/api-reference/mutationObserver/makeBlurEventHandler.md)
- [parseTrackClicks](/tracking/api-reference/common/parsers/parseTrackClicks.md)
- [parseValidate](/tracking/api-reference/common/parsers/parseValidate.md)
- [getElementLocationStack](/tracking/api-reference/common/getElementLocationStack.md)
:::
