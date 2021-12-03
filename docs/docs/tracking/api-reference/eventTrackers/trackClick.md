# trackClick

Triggers a [ClickEvent](/taxonomy/reference/events/ClickEvent.md) for the given [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md).  

```typescript
trackClick = (parameters: {
  element: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
}) => void
```

:::info
`trackClick` is triggered automatically, on [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event), by [tagButton](/tracking/api-reference/locationTaggers/tagButton.md), [tagLink](/tracking/api-reference/locationTaggers/tagLink.md) or [tagExpandableElement](/tracking/api-reference/locationTaggers/tagExpandableElement.md).
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
`trackClick` is a void function.

## Usage example

```typescript jsx
import { trackClick } from '@objectiv/tracker-browser';
```

```typescript jsx
<div
  onClick={(event) => {
    trackClick({ element: event.target })
  }}
/>
```

```typescript jsx
<Accordion
  onClick={(event) => {
    trackClick({ element: event.target })
  }}
/>
```

<br />

:::tip Did you know ?
`trackClick` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [tagButton](/tracking/api-reference/locationTaggers/tagButton.md)
- [tagLink](/tracking/api-reference/locationTaggers/tagLink.md) 
- [tagExpandableElement](/tracking/api-reference/locationTaggers/tagExpandableElement.md)
- [trackInputChange](/tracking/api-reference/eventTrackers/trackInputChange.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
:::
