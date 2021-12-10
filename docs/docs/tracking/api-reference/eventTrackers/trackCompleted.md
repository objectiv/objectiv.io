# trackSuccess

Triggers a [SuccessEvent](/taxonomy/reference/events/SuccessEvent.md).

```typescript
trackSuccess = (parameters: {
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
`trackSuccess` is a void function.

## Usage example

```typescript jsx
import { trackSuccess } from '@objectiv/tracker-browser';
```

```typescript jsx
<form onSubmit={() => {
  sendFormAsync().then(
    () => trackSuccess({ element: form })
  );
}}>
  ...
</form>
```

<br />

:::tip Did you know ?
`trackSuccess` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [makeTracker](/tracking/api-reference/general/makeTracker.md)
- [trackURLChange](/tracking/api-reference/eventTrackers/trackURLChange.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
:::
