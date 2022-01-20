# trackVisibleEvent

Triggers a [VisibleEvent](/taxonomy/reference/events/VisibleEvent.md) for the given [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md).

```typescript
trackVisibleEvent = (parameters: {
  element: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
}) => void
```

:::info
`trackVisibleEvent` is triggered automatically by [tagExpandable](/tracking/browser/api-reference/locationTaggers/tagExpandable.md) and [tagOverlay](/tracking/browser/api-reference/locationTaggers/tagOverlay.md).
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
`trackVisibleEvent` is a void function.

## Usage example

```typescript jsx
import { trackVisibleEvent } from '@objectiv/tracker-browser';
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
`trackVisibleEvent` is just syntactic sugar on top of [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackHiddenEvent](/tracking/browser/api-reference/eventTrackers/trackHiddenEvent.md)
- [trackVisibility](/tracking/browser/api-reference/eventTrackers/trackVisibility.md)
- [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md)
  :::
