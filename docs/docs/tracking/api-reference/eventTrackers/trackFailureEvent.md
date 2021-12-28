# trackFailureEvent

Triggers an [FailureEvent](/taxonomy/reference/events/FailureEvent.md).

```typescript
trackFailureEvent = (parameters: {
  message: string;
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
`trackFailureEvent` is a void function.

## Usage example

```typescript jsx
import { trackFailurEvent, trackSuccessEvent } from '@objectiv/tracker-browser';
```

```typescript jsx
<form onSubmit={() => {
  sendFormAsync()
    .then(
      () => trackSuccessEvent({ message: 'Yes!', element: form }), 
      () => trackFailureEvent({ message: 'Remote rejection.', element: form })
    )
    .catch(
      () => trackFailureEvent({ message: 'Network failure.', element: form })
    );
}}>
  ...
</form>
```

:::tip
`trackFailureEvent` can be safely used while network is temporarily down. Events will be queued and sending will be retried.  
:::

<br />

:::tip Did you know ?
`trackFailureEvent` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [makeTracker](/tracking/api-reference/general/makeTracker.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
:::
