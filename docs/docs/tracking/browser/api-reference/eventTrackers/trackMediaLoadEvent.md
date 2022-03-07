# trackMediaLoadEvent

Triggers a [trackMediaLoadEvent](/taxonomy/reference/events/MediaLoadEvent.md) for the given [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md).

```typescript
trackMediaLoadEvent = (parameters: {
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
`trackMediaLoadEvent` is a void function.

## Usage example

```jsx
import { trackMediaLoadEvent } from '@objectiv/tracker-browser';
```

```jsx
<video
  onLoad={(event) => {
    trackMediaLoadEvent({ element: event.target })
  }}
/>
```

```jsx
<YouTube
  onLoad={({ target: youTubePlayerInstance }) => {
    trackMediaLoadEvent({ element: youTubePlayerInstance.getIframe() })
  }}
/>
```

<br />

:::tip Did you know ?
`trackMediaLoadEvent` is just syntactic sugar on top of [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackMediaEvent](/tracking/browser/api-reference/eventTrackers/trackMediaEvent.md)
- [trackMediaPauseEvent](/tracking/browser/api-reference/eventTrackers/trackMediaPauseEvent.md)
- [trackMediaStartEvent](/tracking/browser/api-reference/eventTrackers/trackMediaStartEvent.md)
- [trackMediaStopEvent](/tracking/browser/api-reference/eventTrackers/trackMediaStopEvent.md)
- [trackVisibility](/tracking/browser/api-reference/eventTrackers/trackVisibility.md)
- [trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
- [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md)
  :::
