# trackSuccessEvent

Triggers a [SuccessEvent](/taxonomy/reference/events/SuccessEvent.md).

```typescript
trackSuccessEvent = (parameters: {
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
| optional | element        | [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md)                           | `document`
| optional | locationStack  | [LocationStack](/tracking/browser/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/browser/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `TrackerConsole.error`

## Returns
`trackSuccessEvent` is a void function.

## Usage example

```jsx
import { trackSuccessEvent } from '@objectiv/tracker-browser';
```

```jsx
<form onSubmit={() => {
  sendFormAsync().then(
    () => trackSuccessEvent({ message: 'Yes!', element: form })
  );
}}>
  ...
</form>
```

<br />

:::tip Did you know ?
`trackSuccessEvent` is just syntactic sugar on top of [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [makeTracker](/tracking/browser/api-reference/general/makeTracker.md)
- [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md)
:::
