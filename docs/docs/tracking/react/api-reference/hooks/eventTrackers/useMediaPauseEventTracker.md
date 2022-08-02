# useMediaPauseEventTracker

Returns a ready-to-trigger [trackMediaPauseEvent](/tracking/react/api-reference/eventTrackers/trackMediaPauseEvent.md) by retrieving ReactTracker instance and LocationStack automatically.

```ts
useMediaPauseEventTracker = (
  hookParameters: {
    tracker?: Tracker,
    options?: TrackEventOptions,
    locationStack?: LocationStack;
    globalContexts?: GlobalContexts;
  } = {}
) => (
  callbackParameters: {
    tracker?: Tracker,
    options?: TrackEventOptions,
    locationStack?: LocationStack;
    globalContexts?: GlobalContexts;
  } = {}
) => Promise<TrackerEvent>
```

## Parameters
|          |                | type              | default value |
|:--------:|:---------------|:------------------|:--------------|
| optional | tracker        | ReactTracker      |               |
| optional | options        | TrackEventOptions |               |
| optional | locationStack  | LocationStack     |               |
| optional | globalContexts | GlobalContexts    |               |

## Returns
A callback with the same parameters of the hook itself.

```ts
(callbackParameters: {
  tracker?: Tracker,
  options?: TrackEventOptions,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
} = {}) => Promise<TrackerEvent>
```

## Usage
```ts
import { useMediaPauseEventTracker } from "@objectiv/tracker-react";
```

```tsx title="Scenario: declaratively wrapping a third party media player with callbacks"
import { MediaPlayerContextWrapper } from "@objectiv/tracker-react";

const trackMediaPause = useMediaPauseEventTracker();

<MediaPlayerContextWrapper id={video.id}>
  <VideoPlayer
    video={video}
    onPause={() => {
      trackMediaPause();
    }}
  />
</MediaPlayerContextWrapper>
```

```tsx title="Scenario: virtual location wrapper"
import { makeMediaPlayerContext } from "@objectiv/tracker-core";

const trackMediaPause = useMediaPauseEventTracker();

<RandomVideoPlayer
  onPause={(randomVideo) => {
    trackMediaPause({
      // Wrap this event in a virtual location representing the video
      locationStack: [
        makeMediaPlayerContext({
          id: randomVideo.id
        })
      ]
    });
  }}
/>
```

<br />

:::info See also
- [useApplicationLoadedEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useApplicationLoadedEventTracker.md)
- [useFailureEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useFailureEventTracker.md)
- [useHiddenEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useHiddenEventTracker.md)
- [useInputChangeEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useInputChangeEventTracker.md)
- [useMediaLoadEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaLoadEventTracker.md)
- [useMediaStartEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaStartEventTracker.md)
- [useMediaStopEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaStopEventTracker.md)
- [usePressEventTracker](/tracking/react/api-reference/hooks/eventTrackers/usePressEventTracker.md)
- [useSuccessEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useSuccessEventTracker.md)
- [useVisibilityTracker](/tracking/react/api-reference/hooks/eventTrackers/useVisibilityTracker.md)
- [useVisibleEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useVisibleEventTracker.md)
:::
