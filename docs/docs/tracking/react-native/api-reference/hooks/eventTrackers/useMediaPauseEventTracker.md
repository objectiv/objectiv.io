# useMediaPauseEventTracker

Returns a ready-to-trigger [trackMediaPauseEvent](/tracking/react-native/api-reference/eventTrackers/trackMediaPauseEvent.md) by retrieving ReactNativeTracker instance and LocationStack automatically.

```ts
useMediaPauseEventTracker = (parameters: {
  tracker?: Tracker,
  options?: TrackEventOptions,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
} = {}) => Function
```

## Parameters
|          |                | type              | default value |
|:--------:|:---------------|:------------------|:--------------|
| optional | tracker        | ReactNativeTracker      |               |
| optional | options        | TrackEventOptions |               |
| optional | locationStack  | LocationStack     |               |
| optional | globalContexts | GlobalContexts    |               |

## Returns
`Function`

## Usage
```ts
import { useMediaPauseEventTracker } from "@objectiv/tracker-react-native";
```

```tsx title="Scenario: third party media player with callbacks"
const trackMediaPause = useMediaPauseEventTracker();

<VideoPlayer
  onPause={() => {
    trackMediaPause();
  }}
/>
```

<br />

:::info See also
- [useApplicationLoadedEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useApplicationLoadedEventTracker.md)
- [useFailureEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useFailureEventTracker.md)
- [useHiddenEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useHiddenEventTracker.md)
- [useInputChangeEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useInputChangeEventTracker.md)
- [useMediaLoadEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useMediaLoadEventTracker.md)
- [useMediaStartEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useMediaStartEventTracker.md)
- [useMediaStopEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useMediaStopEventTracker.md)
- [usePressEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/usePressEventTracker.md)
- [useSuccessEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useSuccessEventTracker.md)
- [useVisibilityTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useVisibilityTracker.md)
- [useVisibleEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useVisibleEventTracker.md)
:::
