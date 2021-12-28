# trackInputChangeEvent

Triggers an [InputChangeEvent](/taxonomy/reference/events/InputChangeEvent.md) for the given [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md).

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
`trackInputChangeEvent` is triggered automatically, on [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event), by [tagInput](/tracking/api-reference/locationTaggers/tagInput.md).
:::

## Parameters
|          |             | type                                                                                                                                                     | default value
| :-:      | :--         | :--                                                                                                                                                      | :--           
| required | **element**    | [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md)                           |
| optional | locationStack  | [LocationStack](/tracking/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
`trackInputChangeEvent` is a void function.

## Usage example

```typescript jsx
import { trackInputChangeEvent } from '@objectiv/tracker-browser';
```

```typescript jsx
<input
  onBlur={(event) => {
    trackInputChangeEvent({ element: event.target })
  }}
/>
```

```typescript jsx
<select
  onChange={(event) => {
    trackInputChangeEvent({ element: event.target })
  }}
>
  ...
</select>
```

```typescript jsx
<TextField
  onBlur={(event) => {
    trackInputChangeEvent({ element: event.target })
  }}
/>
```

<br />

:::tip Did you know ?
`trackInputChangeEvent` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [tagInput](/tracking/api-reference/locationTaggers/tagInput.md)
- [trackPressEvent](/tracking/api-reference/eventTrackers/trackPressEvent.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
:::
