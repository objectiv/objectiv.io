# trackApplicationLoaded

Triggers an [ApplicationLoadedEvent](/taxonomy/reference/events/ApplicationLoadedEvent.md).

```typescript
trackApplicationLoaded = (parameters: {
  element?: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;  
}) => void
```

:::info
`trackApplicationLoaded` is triggered automatically when using either [makeTracker](/tracking/api-reference/general/makeTracker.md) or [getOrMakeTracker](/tracking/api-reference/general/getOrMakeTracker.md)
:::

## Parameters
|          |                | type                                                                                              | default value
| :-:      | :--            | :--                                                                                               | :--           
| optional | element        | [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md)                           | `document`
| optional | locationStack  | [LocationStack](/tracking/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
`trackApplicationLoaded` is a void function.

## Usage example

```typescript jsx
import { trackApplicationLoaded } from '@objectiv/tracker-browser';
```

```typescript jsx
<head>
  ...
  <script>
    trackApplicationLoaded();
  </script>
</head>
```

```typescript jsx
const App = () => {
  ...
  
  trackApplicationLoaded();
  
  return (
    ...
  )
}
```

:::warning
Make sure to set [makeTracker](/tracking/api-reference/general/makeTracker.md)'s `trackApplicationLoaded` to `false`, when manually tracking this event, to avoid double calls.
:::

<br />

:::tip Did you know ?
`trackApplicationLoaded` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [makeTracker](/tracking/api-reference/general/makeTracker.md)
- [trackURLChange](/tracking/api-reference/eventTrackers/trackURLChange.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
:::
