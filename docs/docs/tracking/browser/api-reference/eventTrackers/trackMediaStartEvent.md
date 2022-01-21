# trackMediaStartEvent

Triggers a [trackMediaStartEvent](/taxonomy/reference/events/MediaStartEvent.md) for the given [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md).

```typescript
trackMediaStartEvent = (parameters: {
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
| required | **element**    | [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md)                           |
| optional | locationStack  | [LocationStack](/tracking/browser/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/browser/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
`trackMediaStartEvent` is a void function.

## Usage example

```typescript jsx
import { trackMediaStartEvent } from '@objectiv/tracker-browser';
```

```typescript jsx
<video
  play={(event) => {
    trackMediaStartEvent({ element: event.target })
  }}
  pause={(event) => {
    trackMediaPauseEvent({ element: event.target })
  }}
/>
```

```typescript jsx
<YouTube
  onPlay={({ target: youTubePlayerInstance }) => {
    trackMediaStartEvent({ element: youTubePlayerInstance.getIframe() })
  }}
  onPause={({ target: youTubePlayerInstance }) => {
    trackMediaPauseEvent({ element: youTubePlayerInstance.getIframe() })
  }}
/>
```

<br />

:::tip Did you know ?
`trackMediaStartEvent` is just syntactic sugar on top of [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackMediaEvent](/tracking/browser/api-reference/eventTrackers/trackMediaEvent.md)
- [trackMediaLoadEvent](/tracking/browser/api-reference/eventTrackers/trackMediaLoadEvent.md)
- [trackMediaPauseEvent](/tracking/browser/api-reference/eventTrackers/trackMediaPauseEvent.md)
- [trackMediaStopEvent](/tracking/browser/api-reference/eventTrackers/trackMediaStopEvent.md)
- [trackVisibility](/tracking/browser/api-reference/eventTrackers/trackVisibility.md)
- [trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
- [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md)
  :::
