# useSuccessEventTracker

Returns a ready-to-trigger [trackSuccessEvent](/tracking/react-native/api-reference/eventTrackers/trackSuccessEvent.md) by retrieving ReactNativeTracker instance and LocationStack automatically.

```ts
useSuccessEventTracker = (parameters: {
  tracker?: Tracker,
  options?: TrackEventOptions,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
} = {}) => ({ message: string }) => Promise<TrackerEvent>
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
({ message: string }) => Promise<TrackerEvent>
```

## Usage
```ts
import { useSuccessEventTracker } from "@objectiv/tracker-react-native";
```

```tsx title="Scenario: form submit success"
const trackSuccessEvent = useSuccessEventTracker();

submitFormData(formData)
  .then((response) => {
    if (response.ok) {
      trackSuccessEvent({
        message: response.statusText
      });
    }
  });
```

:::caution
The example above is very simplistic. In reality the message should be more than just an 'OK'.  
For example, either the remote response body could be parsed or the client could specify a meaningful message.  
:::

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
- [useVisibilityTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useVisibilityTracker.md)
- [useVisibleEventTracker](/tracking/react-native/api-reference/hooks/eventTrackers/useVisibleEventTracker.md)
:::
