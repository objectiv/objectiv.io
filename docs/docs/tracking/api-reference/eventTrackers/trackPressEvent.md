# trackPressEvent

Triggers a [PressEvent](/taxonomy/reference/events/PressEvent.md) for the given [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md).  

```typescript
trackPressEvent = (parameters: {
  element: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
}) => void
```

:::info
`trackPressEvent` is triggered automatically, on [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event), by [tagPressable](/tracking/api-reference/locationTaggers/tagPressable.md), [tagLink](/tracking/api-reference/locationTaggers/tagLink.md) or [tagExpandable](/tracking/api-reference/locationTaggers/tagExpandable.md).
:::

## Parameters
|          |                | type                                                                                              | default value
| :-:      | :--            | :--                                                                                               | :--           
| required | **element**    | [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md)                           |
| optional | locationStack  | [LocationStack](/tracking/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
`trackPressEvent` is a void function.

## Usage example

```typescript jsx
import { trackPressEvent } from '@objectiv/tracker-browser';
```

```typescript jsx
<div
  onClick={(event) => {
    trackPressEvent({ element: event.target })
  }}
/>
```

```typescript jsx
<Accordion
  onClick={(event) => {
    trackPressEvent({ element: event.target })
  }}
/>
```

<br />

:::tip Did you know ?
`trackPressEvent` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [tagPressable](/tracking/api-reference/locationTaggers/tagPressable.md)
- [tagLink](/tracking/api-reference/locationTaggers/tagLink.md) 
- [tagExpandable](/tracking/api-reference/locationTaggers/tagExpandable.md)
- [trackInputChangeEvent](/tracking/api-reference/eventTrackers/trackInputChangeEvent.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
:::
