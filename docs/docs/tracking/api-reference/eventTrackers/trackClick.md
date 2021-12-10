# trackPress

Triggers a [PressEvent](/taxonomy/reference/events/PressEvent.md) for the given [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md).  

```typescript
trackPress = (parameters: {
  element: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
}) => void
```

:::info
`trackPress` is triggered automatically, on [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event), by [tagButton](/tracking/api-reference/locationTaggers/tagButton.md), [tagLink](/tracking/api-reference/locationTaggers/tagLink.md) or [tagExpandableElement](/tracking/api-reference/locationTaggers/tagExpandableElement.md).
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
`trackPress` is a void function.

## Usage example

```typescript jsx
import { trackPress } from '@objectiv/tracker-browser';
```

```typescript jsx
<div
  onPress={(event) => {
    trackPress({ element: event.target })
  }}
/>
```

```typescript jsx
<Accordion
  onPress={(event) => {
    trackPress({ element: event.target })
  }}
/>
```

<br />

:::tip Did you know ?
`trackPress` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [tagButton](/tracking/api-reference/locationTaggers/tagButton.md)
- [tagLink](/tracking/api-reference/locationTaggers/tagLink.md) 
- [tagExpandableElement](/tracking/api-reference/locationTaggers/tagExpandableElement.md)
- [trackInputChange](/tracking/api-reference/eventTrackers/trackInputChange.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
:::
