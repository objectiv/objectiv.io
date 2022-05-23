# useFailureEventTracker

Returns a ready-to-trigger [trackFailureEvent](/tracking/react/api-reference/eventTrackers/trackFailureEvent.md) by retrieving ReactTracker instance and LocationStack automatically.

```ts
useFailureEventTracker = (parameters: {
  message: string;
  tracker?: Tracker,
  options?: TrackEventOptions,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
} = {}) => ({ message: string }) => Promise<TrackerEvent>
```

## Parameters
|          |                | type              | default value |
|:--------:|:---------------|:------------------|:--------------|
| required | **message**    | string            |               |
| optional | tracker        | ReactTracker      |               |
| optional | options        | TrackEventOptions |               |
| optional | locationStack  | LocationStack     |               |
| optional | globalContexts | GlobalContexts    |               |

## Returns
```ts
({ message: string }) => Promise<TrackerEvent>
```

## Usage
```ts
import { useFailureEventTracker } from "@objectiv/tracker-react";
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
- [useApplicationLoadedEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useApplicationLoadedEventTracker.md)
- [useHiddenEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useHiddenEventTracker.md)
- [useInputChangeEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useInputChangeEventTracker.md)
- [useMediaLoadEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaLoadEventTracker.md)
- [useMediaPauseEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaPauseEventTracker.md)
- [useMediaStartEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaStartEventTracker.md)
- [useMediaStopEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaStopEventTracker.md)
- [usePressEventTracker](/tracking/react/api-reference/hooks/eventTrackers/usePressEventTracker.md)
- [useSuccessEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useSuccessEventTracker.md)
- [useVisibilityTracker](/tracking/react/api-reference/hooks/eventTrackers/useVisibilityTracker.md)
- [useVisibleEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useVisibleEventTracker.md)
:::
