---
sidebar_position: 1
---
# useMediaStopEventTracker

Returns a ready-to-trigger [trackMediaStopEvent](/tracking/react/api-reference/eventTrackers/trackMediaStopEvent.md) by retrieving ReactTracker instance and LocationStack automatically.

```ts
useMediaStopEventTracker = (
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
```tsx title="Scenario: declaratively wrapping a third party media player with callbacks"
import { MediaPlayerContextWrapper, useMediaStopEventTracker } from "@objectiv/tracker-react";

const trackMediaStop = useMediaStopEventTracker();

<MediaPlayerContextWrapper id={video.id}>
  <VideoPlayer
    video={video}
    onStop={() => {
      trackMediaStop();
    }}
  />
</MediaPlayerContextWrapper>
```

```tsx title="Scenario: virtual location wrapper"
import { makeMediaPlayerContext } from "@objectiv/tracker-core";
import { useMediaStopEventTracker } from "@objectiv/tracker-react";

const trackMediaStop = useMediaStopEventTracker();

<RandomVideoPlayer
  onStop={(randomVideo) => {
    trackMediaStop({
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
- [useApplicationLoadedEventTracker](/tracking/react/api-reference/eventTrackers/useApplicationLoadedEventTracker.md)
- [useFailureEventTracker](/tracking/react/api-reference/eventTrackers/useFailureEventTracker.md)
- [useHiddenEventTracker](/tracking/react/api-reference/eventTrackers/useHiddenEventTracker.md)
- [useInputChangeEventTracker](/tracking/react/api-reference/eventTrackers/useInputChangeEventTracker.md)
- [useMediaLoadEventTracker](/tracking/react/api-reference/eventTrackers/useMediaLoadEventTracker.md)
- [useMediaPauseEventTracker](/tracking/react/api-reference/eventTrackers/useMediaPauseEventTracker.md)
- [useMediaStartEventTracker](/tracking/react/api-reference/eventTrackers/useMediaStartEventTracker.md)
- [usePressEventTracker](/tracking/react/api-reference/eventTrackers/usePressEventTracker.md)
- [useSuccessEventTracker](/tracking/react/api-reference/eventTrackers/useSuccessEventTracker.md)
- [useVisibilityTracker](/tracking/react/api-reference/eventTrackers/useVisibilityTracker.md)
- [useVisibleEventTracker](/tracking/react/api-reference/eventTrackers/useVisibleEventTracker.md)
:::