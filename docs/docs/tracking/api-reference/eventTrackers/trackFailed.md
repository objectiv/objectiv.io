# trackFailure

Triggers an [FailureEvent](/taxonomy/reference/events/FailureEvent.md).

```typescript
trackFailure = (parameters: {
  element?: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;  
}) => void
```

## Parameters
|          |                | type                                                                                              | default value
| :-:      | :--            | :--                                                                                               | :--           
| optional | element        | [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md)                           | `document`
| optional | locationStack  | [LocationStack](/tracking/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
`trackFailure` is a void function.

## Usage example

```typescript jsx
import { trackFailure, trackCompleted } from '@objectiv/tracker-browser';
```

```typescript jsx
<form onSubmit={() => {
  sendFormAsync()
    .then(
      () => trackCompleted({ element: form }), 
      () => {
        const errorContext = makeErrorContext({ id: "form", message: "Remote rejection." });
        trackFailure({ globalContexts: [errorContext], element: form });
      }
    )
    .catch(() => {
      const errorContext = makeErrorContext({ id: "form", message: "Network failure." });
      trackFailure({ globalContexts: [errorContext], element: form });
    });
}}>
  ...
</form>
```

:::tip
`trackFailure` can be safely used while network is temporarily down. Events will be queued and sending will be retried.  
:::

<br />

:::tip Did you know ?
`trackFailure` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [makeTracker](/tracking/api-reference/general/makeTracker.md)
- [trackURLChange](/tracking/api-reference/eventTrackers/trackURLChange.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
:::
