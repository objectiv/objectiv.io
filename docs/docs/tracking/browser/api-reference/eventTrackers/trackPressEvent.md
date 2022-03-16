# trackPressEvent

Triggers a [PressEvent](/taxonomy/reference/events/PressEvent.md) for the given [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md).  

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
`trackPressEvent` is triggered automatically, on [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event), by [tagPressable](/tracking/browser/api-reference/locationTaggers/tagPressable.md), [tagLink](/tracking/browser/api-reference/locationTaggers/tagLink.md) or [tagExpandable](/tracking/browser/api-reference/locationTaggers/tagExpandable.md).
:::

## Parameters
|          |                | type                                                                                              | default value
| :-:      | :--            | :--                                                                                               | :--           
| required | **element**    | [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md)                           |
| optional | locationStack  | [LocationStack](/tracking/browser/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/browser/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `TrackerConsole.error`

## Returns
`trackPressEvent` is a void function.

## Usage example

```jsx
import { trackPressEvent } from '@objectiv/tracker-browser';
```

```jsx
<div
  onClick={(event) => {
    trackPressEvent({ element: event.target })
  }}
/>
```

```jsx
<Accordion
  onClick={(event) => {
    trackPressEvent({ element: event.target })
  }}
/>
```

<br />

:::tip Did you know ?
`trackPressEvent` is just syntactic sugar on top of [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [tagPressable](/tracking/browser/api-reference/locationTaggers/tagPressable.md)
- [tagLink](/tracking/browser/api-reference/locationTaggers/tagLink.md) 
- [tagExpandable](/tracking/browser/api-reference/locationTaggers/tagExpandable.md)
- [trackInputChangeEvent](/tracking/browser/api-reference/eventTrackers/trackInputChangeEvent.md)
- [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md)
:::
