# trackVisibility

Triggers either a [VisibleEvent](/taxonomy/reference/events/VisibleEvent.md) or [HiddenEvent](/taxonomy/reference/events/HiddenEvent.md) for the given [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md) based on state.

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
| required | **element**    | [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md)                           |
| required | **isVisible**  | boolean                                                                                           |
| optional | locationStack  | [LocationStack](/tracking/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`


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
`trackVisibility` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackHidden](/tracking/api-reference/eventTrackers/trackHidden.md)
- [trackVisible](/tracking/api-reference/eventTrackers/trackVisible.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
  :::
