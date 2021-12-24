# trackMediaStart

Triggers a [trackMediaStart](/taxonomy/reference/events/MediaStartEvent.md) for the given [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md).

```typescript
trackMediaStart = (parameters: {
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
`trackMediaStart` is a void function.

## Usage example

```typescript jsx
import { trackMediaStart } from '@objectiv/tracker-browser';
```

```typescript jsx
<video
  play={(event) => {
    trackMediaStart({ element: event.target })
  }}
  pause={(event) => {
    trackMediaPause({ element: event.target })
  }}
/>
```

```typescript jsx
<YouTube
  onPlay={({ target: youTubePlayerInstance }) => {
    trackMediaStart({ element: youTubePlayerInstance.getIframe() })
  }}
  onPause={({ target: youTubePlayerInstance }) => {
    trackMediaPause({ element: youTubePlayerInstance.getIframe() })
  }}
/>
```

<br />

:::tip Did you know ?
`trackMediaStart` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackMediaPause](/tracking/api-reference/eventTrackers/trackMediaPause.md)
- [trackVisibility](/tracking/api-reference/eventTrackers/trackVisibility.md)
- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
  :::
