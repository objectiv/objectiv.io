# trackVideoStart

Triggers a [trackVideoStart](/taxonomy/reference/events/VideoPauseEvent.md) for the given [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md).

```typescript
trackVideoStart = (parameters: {
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
`trackVideoStart` is a void function.

## Usage example

```typescript jsx
import { trackVideoStart } from '@objectiv/tracker-browser';
```

```typescript jsx
<video
  play={(event) => {
    trackVideoStart({ element: event.target })
  }}
  pause={(event) => {
    trackVideoPause({ element: event.target })
  }}
/>
```

```typescript jsx
<YouTube
  onPlay={({ target: youTubePlayerInstance }) => {
    trackVideoStart({ element: youTubePlayerInstance.getIframe() })
  }}
  onPause={({ target: youTubePlayerInstance }) => {
    trackVideoPause({ element: youTubePlayerInstance.getIframe() })
  }}
/>
```

<br />

:::tip Did you know ?
`trackVideoStart` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackVideoPause](/tracking/api-reference/eventTrackers/trackVideoPause.md)
- [trackVisibility](/tracking/api-reference/eventTrackers/trackVisibility.md)
- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
  :::
