# trackSectionHidden

Triggers a [SectionHiddenEvent](/taxonomy/events/SectionHiddenEvent.md) for the given [TrackableElement](/tracking/core-concepts/tagging.md#taggable-elements) or [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

```typescript
trackSectionHidden = (parameters: {
  element: TrackableElement | EventTarget,
  tracker?: BrowserTracker
}) => void
```

:::info
`trackSectionHidden` is triggered automatically by [tagElement](/tracking/api-reference/location-taggers/tagElement.md), [tagExpandableElement](/tracking/api-reference/location-taggers/tagExpandableElement.md), [tagMediaPlayer](/tracking/api-reference/location-taggers/tagMediaPlayer.md), [tagNavigation](/tracking/api-reference/location-taggers/tagNavigation.md) and [tagOverlay](/tracking/api-reference/location-taggers/tagOverlay.md).
:::

## Parameters
|          |             | type                                                                                                                                                     | default value
| :-:      | :--         | :--                                                                                                                                                      | :--           
| required | **element** | [TrackableElement](/tracking/core-concepts/tagging.md#taggable-elements) \| [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) |
| optional | tracker     | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                                                                                      | The default tracker as returned by [getTracker](/TODO)
| optional | onError     | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md)                                                                      | `console.error`

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
  …
</Modal>
```

```typescript jsx
const elementRef = createRef();
…
useEffect(() => {
  trackSectionVisible({ element: elementRef.current });
  return () => {
    trackSectionHidden({ element: elementRef.current });
  }
}, [])
…
return (
  <div ref={elementRef}>
    …
  </div>
)
```

<br />

:::tip Did you know ?
`trackSectionHidden` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/low-level/trackEvent.md).
:::

<br />

:::info See also
- [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md)
- [trackVisibility](/tracking/api-reference/event-trackers/trackVisibility.md)
- [trackEvent](/tracking/api-reference/low-level/trackEvent.md)
:::