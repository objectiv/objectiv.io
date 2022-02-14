---
sidebar_position: 4
---

# Custom Components

import useBaseUrl from '@docusaurus/useBaseUrl';

Our [previous how-to-guide](/tracking/react/how-to-guides/tracking-locations.md) explained how to enrich Locations by using [Tracked Contexts](/tracking/react/api-reference/trackedContexts/overview.md) and [Tracked Elements](/tracking/react/api-reference/trackedElements/overview.md).

In this guide we are going to explore how to correctly use Location Wrappers and low-level Event Trackers to produce a fully functional Tracked Component.

## Making TrackedVideo
Suppose we have several HTML `<video>` tags on our website, and we would like to track when users saw a video, when they played or paused it and when the video reached its end.

Since we want to track all videos, ideally we want to make this into a new Tracked Component to be reused where needed.

## Picking a LocationContext 
The most appropriate candidate to wrap around our videos is a [MediaPlayerContext](/taxonomy/reference/location-contexts/MediaPlayerContext.md).

The equivalent Location Wrapper is [MediaPlayerContextWrapper](/tracking/react/api-reference/locationWrappers/MediaPlayerContextWrapper.md).

Here is how our component could look like:

```tsx
import { MediaPlayerContextWrapper } from "@objectiv/tracker-react";

type TrackedVideoProps = { videoUrl: string, id: string };

const TrackedVideo = ({ videoUrl, id = "video" }: TrackedVideoProps) => (
  <MediaPlayerContextWrapper id={id}>
    <video
      src={videoUrl}
    />
  </MediaPlayerContextWrapper>
);
```

## Handling Media Events
Next we are going to hook up the `<video>` event handlers to Event Trackers. React Tracker SDK offers both [Hook based Event Trackers](/tracking/react/api-reference/hooks/eventTrackers/overview.md) and [Low-level Event Trackers](/tracking/react/api-reference/eventTrackers/overview.md).


### Hooks vs Low-level
Both of them can work, but the implementation will differ quite a bit. As a rule of thumb: 

- Hook Event Trackers should not be used in Components enriching Locations in their JSX.


#### <span style={{ color: 'red'}}>A broken example</span> 
Let's take a look at why is that so important. First let's `hook` our Component to the hook-based Event Trackers. 

```tsx
import {
  useMediaLoadEventTracker,
  useMediaPauseEventTracker,
  useMediaStartEventTracker, 
  useMediaStopEventTracker
} from "@objectiv/tracker-react";

type TrackedVideoProps = { videoUrl: string, id: string };

const TrackedVideo = ({ videoUrl, id = "video" }: TrackedVideoProps) => {
  const trackMediaLoadEvent = useMediaLoadEventTracker();
  const trackMediaStartEvent = useMediaStartEventTracker();
  const trackMediaPauseEvent = useMediaPauseEventTracker();
  const trackMediaStopEvent = useMediaStopEventTracker();

  return (
    <MediaPlayerContextWrapper id={id}>
      <video
        src={videoUrl}
        onReady={() => trackMediaLoadEvent()}
        onStart={() => trackMediaStartEvent()}
        onPause={() => trackMediaPauseEvent()}
        onEnded={() => trackMediaStopEvent()}
      />
    </MediaPlayerContextWrapper>
  );
}
```

:::danger It doesn't work
When testing this Component you will quickly notice that the LocationStack of all Events will not contain a MediaPlayerContext.
:::

Why aren't the Event Trackers detecting the MediaPlayerContextWrapper that is clearly there?

Simply because hooks have generated those callbacks before the JSX has been executed. JSX looks like HTML, but is in fact compiled to JavaScript.

What actually happens here is that the `trackMediaLoadEvent`, `trackMediaStartEvent`, `trackMediaStartEvent` and `trackMediaStopEvent` callbacks cannot know about `MediaPlayerContextWrapper`, as that Element didn't even exist when they got factored.  

#### Two possible solutions
There are two ways of solving this issue:

1. Split the `<video>` component and the hooks calls in a separate component.
2. Use LocationWrapper RenderProps to gain access to the correct TrackingContext.

### Split-component approach
While this works fine, we don't really recommend it as it makes for a very fragmented codebase. Nonetheless, here is how it would look like:

```tsx
import {
  useMediaLoadEventTracker,
  useMediaPauseEventTracker,
  useMediaStartEventTracker, 
  useMediaStopEventTracker
} from "@objectiv/tracker-react";

type TrackedVideoProps = VideoPlayerProps & { id: string };

const TrackedVideo = ({ videoUrl, id = "video" }: TrackedVideoProps) => (
  <MediaPlayerContextWrapper id={id}>
    <VideoPlayer src={videoUrl} />
  </MediaPlayerContextWrapper>
);

type VideoPlayerProps = { videoUrl: string };

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  const trackMediaLoadEvent = useMediaLoadEventTracker();
  const trackMediaStartEvent = useMediaStartEventTracker();
  const trackMediaPauseEvent = useMediaPauseEventTracker();
  const trackMediaStopEvent = useMediaStopEventTracker();

  return (
    <video
      src={videoUrl}
      onReady={() => trackMediaLoadEvent()}
      onStart={() => trackMediaStartEvent()}
      onPause={() => trackMediaPauseEvent()}
      onEnded={() => trackMediaStopEvent()}
    />
  );
}
```

This works because now `VideoPlayer`, being a separate component, will be able to correctly fetch the Context Provider that `TrackedVideo` provides via `MediaPlayerContextWrapper`.

### Render Props approach
There's a less verbose solution using [Render Props](https://reactjs.org/docs/render-props.html).  

All LocationWrappers can render either regular ReactNode children or a function that receives an up-to-date [TrackingContext](/tracking/react/api-reference/common/providers/TrackingContext.md) as parameter.

TrackingContext will contain the closest instance of ReactTracker and the LocationStack.

This is how that looks like:

```tsx
import {
  trackMediaLoadEvent,
  trackMediaPauseEvent,
  trackMediaStartEvent,
  trackMediaStopEvent
} from "@objectiv/tracker-react";

type TrackedVideoProps = { videoUrl: string, id: string };

const TrackedVideo = ({ videoUrl, id = "video" }: TrackedVideoProps) => (
  <MediaPlayerContextWrapper id={id}>
    {(trackingContext) => (
      <video
        src={videoUrl}
        onReady={() => trackMediaLoadEvent(trackingContext)}
        onStart={() => trackMediaStartEvent(trackingContext)}
        onPause={() => trackMediaPauseEvent(trackingContext)}
        onEnded={() => trackMediaStopEvent(trackingContext)}
      />
    )}
  </MediaPlayerContextWrapper>
);
```

All we did here is switching our hook-based Event Trackers with low-level ones.  
These require a `trackingContext` which we can obtained, via Render Props, from `MediaPlayerContextWrapper`.

