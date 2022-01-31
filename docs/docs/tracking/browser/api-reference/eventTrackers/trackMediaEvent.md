# trackMediaEvent

Triggers a [trackMediaEvent](/taxonomy/reference/events/MediaEvent.md) for the given [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md).

```typescript
trackMediaEvent = (parameters: {
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
`trackMediaEvent` is a void function.

## Usage example

```jsx
import { trackMediaEvent } from '@objectiv/tracker-browser';
```

```jsx
<video
  onLoad={(event) => {
    trackMediaEvent({ element: event.target })
  }}
/>
```

```jsx
<YouTube
  onCustomEvent={({ target: youTubePlayerInstance }) => {
    trackMediaEvent({ element: youTubePlayerInstance.getIframe() })
  }}
/>
```

<br />

:::tip Did you know ?
`trackMediaEvent` is just syntactic sugar on top of [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackMediaLoadEvent](/tracking/browser/api-reference/eventTrackers/trackMediaLoadEvent.md)
- [trackMediaPauseEvent](/tracking/browser/api-reference/eventTrackers/trackMediaPauseEvent.md)
- [trackMediaStartEvent](/tracking/browser/api-reference/eventTrackers/trackMediaStartEvent.md)
- [trackMediaStopEvent](/tracking/browser/api-reference/eventTrackers/trackMediaStopEvent.md)
- [trackVisibility](/tracking/browser/api-reference/eventTrackers/trackVisibility.md)
- [trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
- [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md)
  :::
