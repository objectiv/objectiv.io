# trackVisibleEvent

Tracks a [VisibleEvent](/taxonomy/reference/events/VisibleEvent.md).

```ts
trackVisibleEvent = (parameters: {
  tracker: Tracker,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  options?: TrackEventOptions,
}) => Promise<TrackerEvent>
```

:::caution
This is a lower-level API.

[Event Tracking Hooks](/tracking/react-native/api-reference/hooks/eventTrackers/overview.md) are preferable as they automate retrieving both the Tracker instance and LocationStack. In fact, the do use these lower-level APIs internally.
:::

## Parameters
|          |                | type              |
|:--------:|:---------------|:------------------|
| required | **tracker**    | ReactNativeTracker      |
| optional | options        | TrackEventOptions |
| optional | locationStack  | LocationStack     |
| optional | globalContexts | GlobalContexts    |

## Returns
`Promise<TrackerEvent>`

## Usage
- [NavigationContextWrapper](/tracking/react-native/api-reference/locationWrappers/NavigationContextWrapper.md#tracking-via-render-props) documentation has a practical usage example of this Event Tracker.
- [RootLocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/RootLocationContextWrapper.md#tracking-via-render-props) documentation has a practical usage example of this Event Tracker.

<br />

:::info See also
- [trackApplicationLoadedEvent](/tracking/react-native/api-reference/eventTrackers/trackApplicationLoadedEvent.md)
- [trackPressEvent](/tracking/react-native/api-reference/eventTrackers/trackPressEvent.md)
- [trackInputChangeEvent](/tracking/react-native/api-reference/eventTrackers/trackInputChangeEvent.md)
- [trackMediaLoadEvent](/tracking/react-native/api-reference/eventTrackers/trackMediaLoadEvent.md)
- [trackMediaPauseEvent](/tracking/react-native/api-reference/eventTrackers/trackMediaPauseEvent.md)
- [trackMediaStartEvent](/tracking/react-native/api-reference/eventTrackers/trackMediaStartEvent.md)
- [trackMediaStopEvent](/tracking/react-native/api-reference/eventTrackers/trackMediaStopEvent.md)
- [trackFailureEvent](/tracking/react-native/api-reference/eventTrackers/trackFailureEvent.md)
- [trackVisibleEvent](/tracking/react-native/api-reference/eventTrackers/trackVisibleEvent.md)
- [trackHiddenEvent](/tracking/react-native/api-reference/eventTrackers/trackHiddenEvent.md)
- [trackVisibility](/tracking/react-native/api-reference/eventTrackers/trackVisibility.md)
:::
