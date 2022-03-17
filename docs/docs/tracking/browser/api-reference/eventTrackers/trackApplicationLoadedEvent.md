# trackApplicationLoadedEvent

Triggers an [ApplicationLoadedEvent](/taxonomy/reference/events/ApplicationLoadedEvent.md).

```typescript
trackApplicationLoadedEvent = (parameters: {
  element?: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;  
}) => void
```

:::info
`trackApplicationLoadedEvent` is triggered automatically when using either [makeTracker](/tracking/browser/api-reference/general/makeTracker.md) or [getOrMakeTracker](/tracking/browser/api-reference/general/getOrMakeTracker.md)
:::

## Parameters
|          |                | type                                                                                              | default value
| :-:      | :--            | :--                                                                                               | :--           
| optional | element        | [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md)                           | `document`
| optional | locationStack  | [LocationStack](/tracking/browser/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/browser/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `TrackerConsole.error`

## Returns
`trackApplicationLoadedEvent` is a void function.

## Usage example

```jsx
import { trackApplicationLoadedEvent } from '@objectiv/tracker-browser';
```

```jsx
<head>
  ...
  <script>
    trackApplicationLoadedEvent();
  </script>
</head>
```

```jsx
const App = () => {
  ...
  
  trackApplicationLoadedEvent();
  
  return (
    ...
  )
}
```

:::warning
Make sure to set [makeTracker](/tracking/browser/api-reference/general/makeTracker.md)'s `trackApplicationLoadedEvent` to `false`, when manually tracking this event, to avoid double calls.
:::

<br />

:::tip Did you know ?
`trackApplicationLoadedEvent` is just syntactic sugar on top of [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [makeTracker](/tracking/browser/api-reference/general/makeTracker.md)
- [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md)
:::
