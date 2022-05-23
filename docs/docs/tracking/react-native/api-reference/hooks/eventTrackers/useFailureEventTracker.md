# useFailureEventTracker

Returns a ready-to-trigger [trackFailureEvent](/tracking/react-native/api-reference/eventTrackers/trackFailureEvent.md) by retrieving ReactNativeTracker instance and LocationStack automatically.

```ts
useFailureEventTracker = (parameters: {
  message: string;
  tracker?: Tracker,
  options?: TrackEventOptions,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
} = {}) => Function
```

## Parameters
|          |                | type               | default value |
|:--------:|:---------------|:-------------------|:--------------|
| required | **message**    | string             |               |
| optional | tracker        | ReactNativeTracker |               |
| optional | options        | TrackEventOptions  |               |
| optional | locationStack  | LocationStack      |               |
| optional | globalContexts | GlobalContexts     |               |

## Returns
`Function`

## Usage
```ts
import { useFailureEventTracker } from "@objectiv/tracker-react-native";
```

```tsx title="Scenario: form submit failure"
const trackFailureEvent = useFailureEventTracker();

submitFormData(formData)
  .catch((error) => {
    trackFailureEvent({
      message: error.message
    });
  });
```

<br />

:::info See also
- [useApplicationLoadedEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useApplicationLoadedEventTracker.md)
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
