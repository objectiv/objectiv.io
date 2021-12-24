# trackMediaStop

Triggers a [trackMediaStop](/taxonomy/reference/events/MediaStopEvent.md) for the given [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md).

```typescript
trackMediaStop = (parameters: {
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
`trackMediaStop` is a void function.

## Usage example

```typescript jsx
import { trackMediaStop } from '@objectiv/tracker-browser';
```

```typescript jsx
<video
  onLoad={(event) => {
    trackMediaStop({ element: event.target })
  }}
/>
```

```typescript jsx
<YouTube
  onLoad={({ target: youTubePlayerInstance }) => {
    trackMediaStop({ element: youTubePlayerInstance.getIframe() })
  }}
/>
```

<br />

:::tip Did you know ?
`trackMediaStop` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackMediaPause](/tracking/api-reference/eventTrackers/trackMediaPause.md)
- [trackMediaStart](/tracking/api-reference/eventTrackers/trackMediaStart.md)
- [trackMediaStop](/tracking/api-reference/eventTrackers/trackMediaStop.md)
- [trackVisibility](/tracking/api-reference/eventTrackers/trackVisibility.md)
- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
  :::
