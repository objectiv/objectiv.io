# useApplicationLoadedEventTracker

Returns a ready-to-trigger [trackApplicationLoadedEvent](/tracking/react-native/api-reference/eventTrackers/trackApplicationLoadedEvent.md) by retrieving ReactNativeTracker instance and LocationStack automatically. 

```ts
useApplicationLoadedEventTracker = (parameters: {
  tracker?: Tracker,
  options?: TrackEventOptions,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
} = {}) => Function
```

:::caution
[ObjectivProvider](/tracking/react-native/api-reference/common/providers/ObjectivProvider.md) tracks [ApplicationLoadedEvent](/taxonomy/reference/events/ApplicationLoadedEvent.md) automatically on mount.  
Make sure to set the `trackApplicationLoaded` prop of ObjectivProvider to `false` when manually tracking it.  
:::

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
import { useApplicationLoadedEventTracker } from "@objectiv/tracker-react-native";
```

```tsx title="Scenario: trigger ApplicationLoadedEvent only after the config fetch has executed"
const trackApplicationLoadedEvent = useApplicationLoadedEventTracker();

fetch('./config.json')
  .finally(() => {
    trackApplicationLoadedEvent()
  });
```

<br />

:::info See also
- [useFailureEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useFailureEventTracker.md)
- [useHiddenEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useHiddenEventTracker.md)
- [useInputChangeEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useInputChangeEventTracker.md)
- [useMediaLoadEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useMediaLoadEventTracker.md)
- [useMediaPauseEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useMediaPauseEventTracker.md)
- [useMediaStartEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useMediaStartEventTracker.md)
- [useMediaStopEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useMediaStopEventTracker.md)
- [usePressEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/usePressEventTracker.md)
- [useSuccessEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useSuccessEventTracker.md)
- [useVisibilityTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useVisibilityTracker.md)
- [useVisibleEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useVisibleEventTracker.md)
:::
