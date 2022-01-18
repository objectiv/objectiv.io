# trackVisibleEvent

Triggers a [VisibleEvent](/taxonomy/reference/events/VisibleEvent.md) for the given [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md).

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
`trackVisibleEvent` is triggered automatically by [tagExpandable](/tracking/api-reference/locationTaggers/tagExpandable.md) and [tagOverlay](/tracking/api-reference/locationTaggers/tagOverlay.md).
:::

## Parameters
|          |             | type                                                                                                 | default value
| :-:      | :--         | :--                                                                                                  | :--           
| required | **element**    | [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md)                           |
| optional | locationStack  | [LocationStack](/tracking/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

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
`trackVisibleEvent` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackHiddenEvent](/tracking/api-reference/eventTrackers/trackHiddenEvent.md)
- [trackVisibility](/tracking/api-reference/eventTrackers/trackVisibility.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
  :::
