# trackHiddenEvent

Triggers a [HiddenEvent](/taxonomy/reference/events/HiddenEvent.md) for the given [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md).

```typescript
trackHiddenEvent = (parameters: {
  element: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
}) => void
```

:::info
`trackHiddenEvent` is triggered automatically by [tagExpandable](/tracking/browser/api-reference/locationTaggers/tagExpandable.md) and [tagOverlay](/tracking/browser/api-reference/locationTaggers/tagOverlay.md).
:::

## Parameters
|          |             | type                                                                                                 | default value
| :-:      | :--         | :--                                                                                                  | :--           
| required | **element**    | [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md)                           |
| optional | locationStack  | [LocationStack](/tracking/browser/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/browser/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
`trackHiddenEvent` is a void function.

## Usage example

```typescript jsx
import { trackHiddenEvent } from '@objectiv/tracker-browser';
```

```typescript jsx
<Modal
  onShow={(event) => {
    trackVisibleEvent({ element: event.target })
  }}
  onHide={(event) => {
    trackHiddenEvent({ element: event.target })
  }}
>
  ...
</Modal>
```

```typescript jsx
const elementRef = createRef();
...
useEffect(() => {
  trackVisibleEvent({ element: elementRef.current });
  return () => {
    trackHiddenEvent({ element: elementRef.current });
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
`trackHiddenEvent` is just syntactic sugar on top of [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackVisibleEvent](/tracking/browser/api-reference/eventTrackers/trackVisibleEvent.md)
- [trackVisibility](/tracking/browser/api-reference/eventTrackers/trackVisibility.md)
- [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md)
:::
