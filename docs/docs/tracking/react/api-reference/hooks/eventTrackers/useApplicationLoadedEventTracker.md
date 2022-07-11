# useApplicationLoadedEventTracker

Returns a ready-to-trigger [trackApplicationLoadedEvent](/tracking/react/api-reference/eventTrackers/trackApplicationLoadedEvent.md) by retrieving ReactTracker instance and LocationStack automatically. 

```ts
useApplicationLoadedEventTracker = (parameters: {
  tracker?: Tracker,
  options?: TrackEventOptions,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
} = {}) => Function
```

:::caution
[ObjectivProvider](/tracking/react/api-reference/providers/ObjectivProvider.md) tracks [ApplicationLoadedEvent](/taxonomy/reference/events/ApplicationLoadedEvent.md) automatically on mount.  
Make sure to set the `trackApplicationLoaded` prop of ObjectivProvider to `false` when manually tracking it.  
:::

## Parameters
|          |                | type              | default value |
|:--------:|:---------------|:------------------|:--------------|
| optional | tracker        | ReactTracker      |               |
| optional | options        | TrackEventOptions |               |
| optional | locationStack  | LocationStack     |               |
| optional | globalContexts | GlobalContexts    |               |

## Returns
`Function`

## Usage
```ts
import { useApplicationLoadedEventTracker } from "@objectiv/tracker-react";
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
- [useFailureEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useFailureEventTracker.md)
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
