# trackEvent

First, it determines the [Location](/tracking/core-concepts/locations.md) of a [TrackableElement](/tracking/core-concepts/tagging.md#taggable-elements) or [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), then enriches the given [Event](/taxonomy/reference/events/overview.md) with the Location and triggers it.

```typescript
trackEvent = (parameters: {
  event: UntrackedEvent;
  element?: TrackedElement;
  tracker?: BrowserTracker;
  trackerId?: string;
  onError?: TrackOnErrorCallback;
}) => void
```

:::caution
`trackEvent` is a lower-level API. It's main purpose is to ease the development of new [Event Trackers](/tracking/api-reference/eventTrackers/overview.md).
:::

## Parameters
|          |           | type                                                                                                    | default value
| :-:      | :--       | :--                                                                                                     | :--           
| required | **event** | Instance returned by any [Event Factory](/tracking/api-reference/core/CoreFactories.md#event-factories) | 
| optional | element   | [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md)                                 | [documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)
| optional | tracker   | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                                     | The default tracker as returned by [getTracker](/tracking/api-reference/general/getTracker.md)
| optional | trackerId | string                                                                                                  |  
| optional | onError   | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md)       | `console.error`

## Returns
`trackEvent` is a void function.

## Usage example

```typescript jsx
import { trackEvent, makeClickEvent } from '@objectiv/tracker-browser';
```

```typescript jsx
export const trackPressEvent = (parameters: {
  element: TaggableElement | EventTarget;
  tracker?: BrowserTracker;
  onError?: TrackOnErrorCallback;
}) => {
  return trackEvent({ event: makeClickEvent(), ...parameters });
};
```

<br />

:::info See also
- [Event Trackers](/tracking/api-reference/eventTrackers/overview.md)
- [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md)
- [EventFactory](/tracking/api-reference/core/CoreFactories.md#event-factory-list)
:::
