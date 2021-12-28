# trackMediaStopEvent

Triggers a [trackMediaStopEvent](/taxonomy/reference/events/MediaStopEvent.md) for the given [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md).

```typescript
trackMediaStopEvent = (parameters: {
  element: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
}) => void
```

## Parameters
|          |             | type                                                                                                                                                     | default value
| :-:      | :--         | :--                                                                                                                                                      | :--           
| required | **element**    | [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md)                           |
| optional | locationStack  | [LocationStack](/tracking/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
`trackMediaStopEvent` is a void function.

## Usage example

```typescript jsx
import { trackMediaStopEvent } from '@objectiv/tracker-browser';
```

```typescript jsx
<video
  onStop={(event) => {
    trackMediaStopEvent({ element: event.target })
  }}
/>
```

```typescript jsx
<YouTube
  onStop={({ target: youTubePlayerInstance }) => {
    trackMediaStopEvent({ element: youTubePlayerInstance.getIframe() })
  }}
/>
```

<br />

:::tip Did you know ?
`trackMediaStopEvent` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackMediaPauseEvent](/tracking/api-reference/eventTrackers/trackMediaPauseEvent.md)
- [trackMediaStartEvent](/tracking/api-reference/eventTrackers/trackMediaStartEvent.md)
- [trackMediaStopEvent](/tracking/api-reference/eventTrackers/trackMediaStopEvent.md)
- [trackVisibility](/tracking/api-reference/eventTrackers/trackVisibility.md)
- [trackPressEvent](/tracking/api-reference/eventTrackers/trackPressEvent.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
  :::
