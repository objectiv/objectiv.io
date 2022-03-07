# trackEvent

First, it determines the [Location](/tracking/core-concepts/locations.md) of a [TrackableElement](/tracking/core-concepts/browser/tagging.md#taggable-elements) or [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), then enriches the given [Event](/taxonomy/reference/events/overview.md) with the Location and triggers it.

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
`trackEvent` is a lower-level API. It's main purpose is to ease the development of new [Event Trackers](/tracking/browser/api-reference/eventTrackers/overview.md).
:::

## Parameters
|          |           | type                                                                                                    | default value
| :-:      | :--       | :--                                                                                                     | :--           
| required | **event** | Instance returned by any [Event Factory](/tracking/browser/api-reference/core/CoreFactories.md#event-factories) | 
| optional | element   | [TrackedElement](/tracking/browser/api-reference/definitions/TrackedElement.md)                                 | [documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)
| optional | tracker   | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)                                     | The default tracker as returned by [getTracker](/tracking/browser/api-reference/general/getTracker.md)
| optional | trackerId | string                                                                                                  |  
| optional | onError   | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md)       | `console.error`

## Returns
`trackEvent` is a void function.

## Usage example

```jsx
import { trackEvent, makePressEvent } from '@objectiv/tracker-browser';
```

```jsx
export const trackPressEvent = (parameters: {
  element: TaggableElement | EventTarget;
  tracker?: BrowserTracker;
  onError?: TrackOnErrorCallback;
}) => {
  return trackEvent({ event: makePressEvent(), ...parameters });
};
```

<br />

:::info See also
- [Event Trackers](/tracking/browser/api-reference/eventTrackers/overview.md)
- [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md)
- [EventFactory](/tracking/browser/api-reference/core/CoreFactories.md#event-factory-list)
:::
