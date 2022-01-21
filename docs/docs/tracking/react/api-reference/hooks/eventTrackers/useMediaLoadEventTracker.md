# useMediaLoadEventTracker

Returns a ready-to-trigger [trackMediaLoadEvent](/tracking/react/api-reference/eventTrackers/trackMediaLoadEvent.md) by retrieving ReactTracker instance and LocationStack automatically.

```ts
useMediaLoadEventTracker = (parameters: {
  tracker?: Tracker,
  options?: TrackEventOptions,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
} = {}) => Function
```

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
import { useMediaLoadEventTracker } from "@objectiv/tracker-react";
```

```tsx title="Scenario: third party media player with callbacks"
const trackMediaLoad = useMediaLoadEventTracker();

<VideoPlayer
  onReady={() => {
    trackMediaLoad();
  }}
/>
```

<br />

:::info See also
- [useApplicationLoadedEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useApplicationLoadedEventTracker.md)
- [useFailureEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useFailureEventTracker.md)
- [useHiddenEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useHiddenEventTracker.md)
- [useInputChangeEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useInputChangeEventTracker.md)
- [useMediaPauseEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaPauseEventTracker.md)
- [useMediaStartEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaStartEventTracker.md)
- [useMediaStopEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaStopEventTracker.md)
- [usePressEventTracker](/tracking/react/api-reference/hooks/eventTrackers/usePressEventTracker.md)
- [useSuccessEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useSuccessEventTracker.md)
- [useVisibilityTracker](/tracking/react/api-reference/hooks/eventTrackers/useVisibilityTracker.md)
- [useVisibleEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useVisibleEventTracker.md)
:::
