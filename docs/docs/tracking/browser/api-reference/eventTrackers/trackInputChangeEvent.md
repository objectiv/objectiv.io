# trackInputChangeEvent

Triggers an [InputChangeEvent](/taxonomy/reference/events/InputChangeEvent.md) for the given [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md).

```typescript
trackInputChangeEvent = (parameters: {
  element: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
}) => void
```

:::info
`trackInputChangeEvent` is triggered automatically, on [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event), by [tagInput](/tracking/browser/api-reference/locationTaggers/tagInput.md).
:::

## Parameters
|          |             | type                                                                                                                                                     | default value
| :-:      | :--         | :--                                                                                                                                                      | :--           
| required | **element**    | [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md)                           |
| optional | locationStack  | [LocationStack](/tracking/browser/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/browser/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
`trackInputChangeEvent` is a void function.

## Usage example

```jsx
import { trackInputChangeEvent } from '@objectiv/tracker-browser';
```

```jsx
<input
  onBlur={(event) => {
    trackInputChangeEvent({ element: event.target })
  }}
/>
```

```jsx
<select
  onChange={(event) => {
    trackInputChangeEvent({ element: event.target })
  }}
>
  ...
</select>
```

```jsx
<TextField
  onBlur={(event) => {
    trackInputChangeEvent({ element: event.target })
  }}
/>
```

<br />

:::tip Did you know ?
`trackInputChangeEvent` is just syntactic sugar on top of [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [tagInput](/tracking/browser/api-reference/locationTaggers/tagInput.md)
- [trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
- [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md)
:::
