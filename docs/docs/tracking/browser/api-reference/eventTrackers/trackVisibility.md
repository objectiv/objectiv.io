# trackVisibility

Triggers either a [VisibleEvent](/taxonomy/reference/events/VisibleEvent.md) or [HiddenEvent](/taxonomy/reference/events/HiddenEvent.md) for the given [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md) based on state.

```typescript
trackVisibility = (parameters: {
  element: TrackedElement;
  isVisible: boolean,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
}) => void
```

## Parameters
|          |                | type                                                                                                                                                     | default value
| :-:      | :--            | :--                                                                                                                                                      | :--           
| required | **element**    | [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md)                           |
| required | **isVisible**  | boolean                                                                                           |
| optional | locationStack  | [LocationStack](/tracking/browser/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/browser/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`


## Returns
`trackVisibility` is a void function.

## Usage example

```typescript jsx
import { trackVisibility } from '@objectiv/tracker-browser';
```

```typescript jsx
<Accordion
  onChange={(event, expanded) => {
    trackVisibility({ element: event.target, isVisible: expanded })
  }}
>
  ...
</Accordion>
```

<br />

:::tip Did you know ?
`trackVisibility` is just syntactic sugar on top of [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackHiddenEvent](/tracking/browser/api-reference/eventTrackers/trackHiddenEvent.md)
- [trackVisibleEvent](/tracking/browser/api-reference/eventTrackers/trackVisibleEvent.md)
- [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md)
  :::
