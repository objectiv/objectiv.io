---
sidebar_position: 100
---
# trackPressEvent

Tracks a [PressEvent](/taxonomy/reference/events/PressEvent.md).

```ts
trackPressEvent = (parameters: {
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
- [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md#tracking-via-render-props) documentation has a practical usage example of this Event Tracker.
- [ExpandableContextWrapper](/tracking/react/api-reference/locationWrappers/ExpandableContextWrapper.md#tracking-via-render-props) documentation has a practical usage example of this Event Tracker.
- [LinkContextWrapper](/tracking/react/api-reference/locationWrappers/LinkContextWrapper.md#tracking-via-render-props) documentation has a practical usage example of this Event Tracker.
- [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md#tracking-via-render-props) documentation has a practical usage example of this Event Tracker.
- [PressableContextWrapper](/tracking/react/api-reference/locationWrappers/PressableContextWrapper.md#tracking-via-render-props) documentation has a practical usage example of this Event Tracker.
- [OverlayContextWrapper](/tracking/react/api-reference/locationWrappers/OverlayContextWrapper.md#tracking-via-render-props) documentation has a practical usage example of this Event Tracker.

<br />

:::info See also
- [trackApplicationLoadedEvent](/tracking/react/api-reference/eventTrackers/trackApplicationLoadedEvent.md)
- [trackPressEvent](/tracking/react/api-reference/eventTrackers/trackPressEvent.md)
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
