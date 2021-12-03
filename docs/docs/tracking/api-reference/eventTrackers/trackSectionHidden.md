# trackSectionHidden

Triggers a [SectionHiddenEvent](/taxonomy/reference/events/SectionHiddenEvent.md) for the given [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md).

```typescript
trackSectionHidden = (parameters: {
  element: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
}) => void
```

:::info
`trackSectionHidden` is triggered automatically by [tagElement](/tracking/api-reference/locationTaggers/tagElement.md), [tagExpandableElement](/tracking/api-reference/locationTaggers/tagExpandableElement.md), [tagMediaPlayer](/tracking/api-reference/locationTaggers/tagMediaPlayer.md), [tagNavigation](/tracking/api-reference/locationTaggers/tagNavigation.md) and [tagOverlay](/tracking/api-reference/locationTaggers/tagOverlay.md).
:::

## Parameters
|          |             | type                                                                                                                                                     | default value
| :-:      | :--         | :--                                                                                                                                                      | :--           
| required | **element**    | [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md)                           |
| optional | locationStack  | [LocationStack](/tracking/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
`trackSectionHidden` is a void function.

## Usage example

```typescript jsx
import { trackSectionHidden } from '@objectiv/tracker-browser';
```

```typescript jsx
<Modal
  onShow={(event) => {
    trackSectionVisible({ element: event.target })
  }}
  onHide={(event) => {
    trackSectionHidden({ element: event.target })
  }}
>
  ...
</Modal>
```

```typescript jsx
const elementRef = createRef();
...
useEffect(() => {
  trackSectionVisible({ element: elementRef.current });
  return () => {
    trackSectionHidden({ element: elementRef.current });
  }
}, [])
...
return (
  <div ref={elementRef}>
    ...
  </div>
)
```

<br />

:::tip Did you know ?
`trackSectionHidden` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackSectionVisible](/tracking/api-reference/eventTrackers/trackSectionVisible.md)
- [trackVisibility](/tracking/api-reference/eventTrackers/trackVisibility.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
:::
