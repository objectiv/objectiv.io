---
sidebar_position: 100
---

# trackApplicationLoadedEvent

Tracks an [ApplicationLoadedEvent](/taxonomy/reference/events/ApplicationLoadedEvent.md).

```ts
trackApplicationLoadedEvent = (parameters: {
  tracker: Tracker,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  options?: TrackEventOptions,
}) => Promise<TrackerEvent>
```

:::caution
This is a lower-level API.   

[Event Tracking Hooks](/tracking/react/api-reference/eventTrackers/overview.md) are preferable as they automate retrieving both the Tracker instance and LocationStack. In fact, the do use these lower-level APIs internally.
:::

:::info
Under normal circumstances [ObjectivTracker](/tracking/react/api-reference/providers/ObjectivProvider.md) tracks this event automatically, unless disabled via its options.
:::

## Parameters
|          |                | type              |
|:--------:|:---------------|:------------------|
| required | **tracker**    | ReactTracker      |
| optional | options        | TrackEventOptions |
| optional | locationStack  | LocationStack     |
| optional | globalContexts | GlobalContexts    |

## Returns
`Promise<TrackerEvent>`

## Usage
```ts
import { 
  ReactTracker,
  trackApplicationLoadedEvent, 
  TrackingContextProvider, 
  useOnMount
} from '@objectiv/tracker-react';
```

```tsx
import { useOnMount } from "@objectiv/tracker-react";

const App = ({ children }) => {
  const tracker = new ReactTracker({
    endpoint: 'https://collector.app.dev',
    applicationId: 'app-id'
  })

  useOnMount(() => {
    trackApplicationLoadedEvent({ tracker });
  })

  return (
    <TrackingContextProvider tracker={tracker}>
      {children}
    </TrackingContextProvider>
  );
}
```

:::tip
The code above is actually very similar to what [ObjectivProvider](/tracking/react/api-reference/providers/ObjectivProvider.md) does internally. Check the [source on GitHub](https://github.com/objectiv/objectiv-analytics/blob/main/tracker/trackers/react/src/providers/ObjectivProvider.tsx).
:::

<br />

:::info See also
- [trackPressEvent](/tracking/react/api-reference/eventTrackers/trackPressEvent.md)
- [trackInputChangeEvent](/tracking/react/api-reference/eventTrackers/trackInputChangeEvent.md)
- [trackMediaLoadEvent](/tracking/react/api-reference/eventTrackers/trackMediaLoadEvent.md)
- [trackMediaPauseEvent](/tracking/react/api-reference/eventTrackers/trackMediaPauseEvent.md)
- [trackMediaStartEvent](/tracking/react/api-reference/eventTrackers/trackMediaStartEvent.md)
- [trackMediaStopEvent](/tracking/react/api-reference/eventTrackers/trackMediaStopEvent.md)
- [trackFailureEvent](/tracking/react/api-reference/eventTrackers/trackFailureEvent.md)
- [trackSuccessEvent](/tracking/react/api-reference/eventTrackers/trackSuccessEvent.md)
- [trackHiddenEvent](/tracking/react/api-reference/eventTrackers/trackHiddenEvent.md)
- [trackVisibility](/tracking/react/api-reference/eventTrackers/trackVisibility.md)
- [trackVisibleEvent](/tracking/react/api-reference/eventTrackers/trackVisibleEvent.md)
:::
