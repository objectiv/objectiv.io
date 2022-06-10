# useVisibilityTracker

Returns a ready-to-trigger [trackVisibility](/tracking/react-native/api-reference/eventTrackers/trackVisibility.md) by retrieving ReactNativeTracker instance and LocationStack automatically.

```ts
useVisibilityTracker = (parameters: {
  tracker?: Tracker,
  options?: TrackEventOptions,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
} = {}) => ({ isVisible: boolean }) => Promise<TrackerEvent>
```

## Parameters
|          |                | type               | default value |
|:--------:|:---------------|:-------------------|:--------------|
| optional | tracker        | ReactNativeTracker |               |
| optional | options        | TrackEventOptions  |               |
| optional | locationStack  | LocationStack      |               |
| optional | globalContexts | GlobalContexts     |               |

## Returns
```ts
({ isVisible: boolean }) => Promise<TrackerEvent>
```

## Usage
```ts
import { useVisibilityTracker } from "@objectiv/tracker-react-native";
```

```tsx title="Scenario: third party drawer with onChange callback carrying the latest state"
const trackVisibility = useVisibilityTracker();

<Drawer
  onChange={(isOpen) => {
    trackVisibility({ isVisibile: isOpen });
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
- [useMediaPauseEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useMediaPauseEventTracker.md)
- [useMediaStartEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useMediaStartEventTracker.md)
- [useMediaStopEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useMediaStopEventTracker.md)
- [usePressEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/usePressEventTracker.md)
- [useSuccessEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useSuccessEventTracker.md)
- [useVisibleEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useVisibleEventTracker.md)
:::
