---
sidebar_position: 4
---

# Custom Components

import useBaseUrl from '@docusaurus/useBaseUrl';

Our [previous how-to-guide](/tracking/react-native/how-to-guides/tracking-locations.md) explained how to enrich Locations by using [Tracked Components](/tracking/react-native/api-reference/trackedComponents/overview.md).

In this guide we are going to explore how to correctly use Location Wrappers and low-level Event Trackers to produce a fully functional Tracked Component.

## Making TrackedImage
Suppose we have several interactive images in our Application, and we would like to track when users press on them.

:::info Bear with us
The following example could just be achieved using a [TrackedPressable](/tracking/react-native/api-reference/trackedComponents/TrackedPressable.md) component:

```tsx
import {TrackedPressable, TrackedPressableProps} from "@objectiv/tracker-react-native";

type TrackedImageProps = ImageProps & TrackedPressableProps;

const TrackedImage = ({ id, onPress, ...imageProps }: TrackedImageProps) => (
  <TrackedPressable id={id} onPress={onPress}>
    <Image {...imageProps} />
  </TrackedPressable>
);
```

But for the sake of showcasing how the SDK works under the hood we are going to build everything from scratch using lower-level APIs.

This should give you a good idea of how to approach writing your own Tracked Components when the ones we prepared may not fit your needs.
:::
## Picking a LocationContext 
Since users can literally press on these images, let's use a [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md).

The equivalent Location Wrapper is [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md).

Here is how our component could look like:

```tsx
import { PressableContextWrapper } from "@objectiv/tracker-react-native";
import { Image } from 'react-native';

type TrackedImageProps = ImageProps & { id: string };

const TrackedImage = ({ id, ...imageProps }: TrackedImageProps) => (
  <PressableContextWrapper id={id}>
    <Image {...imageProps} />
  </PressableContextWrapper>
);
```

## Handling Press Events
Next we are going to add a press handler.  
React Native Tracker SDK offers both [Hook based Event Trackers](/tracking/react-native/api-reference/hooks/eventTrackers/overview.md) and [Low-level Event Trackers](/tracking/react-native/api-reference/eventTrackers/overview.md).


### Hooks vs Low-level
Both of them can work, but the implementation will differ quite a bit. As a rule of thumb: 

- Hook Event Trackers should not be used in Components enriching Locations in their JSX.

<p style={{ color: 'red', fontWeight: 'bold'}}>A broken example</p> 

Let's take a look at why is that so important. First let's `hook` our Component to the hook-based Event Trackers. 

```tsx
import { PressableContextWrapper, usePressEventTracker } from "@objectiv/tracker-react-native";

type TrackedImageProps = ImageProps & { 
  id: string,
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
};

const TrackedImage = ({ id, onPress, ...imageProps }: TrackedImageProps) => {
  const trackPressEvent = usePressEventTracker();

  return (
    <PressableContextWrapper id={id}>
      <Pressable
        onPress={(event) => {
          onPress && onPress(event);
          trackPressEvent();
        }}
      >
        <Image {...imageProps} />
      </Pressable>
    </PressableContextWrapper>
  );
}
```

:::danger It doesn't work
When testing this Component you will quickly notice that the LocationStack of all Events will not contain a PressableContext.
:::

Why aren't the Event Trackers detecting the PressableContextWrapper that is clearly there?

Simply because hooks have generated those callbacks before the JSX has been executed.

What actually happens here is that the `trackPressEvent` callback cannot know about `PressableContextWrapper`, as that Component will be created later on.  

**Two possible solutions**

There are two ways of solving this issue:

1. Split the `<Image>` component and the hooks calls in a separate component.
2. Use LocationWrapper RenderProps to gain access to the correct TrackingContext.

### Split-component approach
While this works fine, we don't really recommend it as it makes for a very fragmented codebase. Nonetheless, here is how it would look like:

```tsx
import { PressableContextWrapper, usePressEventTracker } from "@objectiv/tracker-react-native";

type PressableImageProps = ImageProps & {
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
};

const PressableImage = ({ onPress, ...imageProps }: PressableImageProps) => {
  const trackPressEvent = usePressEventTracker();

  return (
    <Pressable 
      onPress={(event) => {
        onPress && onPress(event);
        trackPressEvent();
      }}
    >
      <Image {...imageProps} />
    </Pressable>
  )
}

type TrackedImageProps = PressableImageProps & {
  id: string,
};

const TrackedImage = ({ id, ...pressableImageProps }: TrackedImageProps) => (
  <PressableContextWrapper id={id}>
    <PressableImage {...pressableImageProps} />
  </PressableContextWrapper>
);
```

This works because now `PressableImage`, being a separate component, will be able to correctly fetch the Context Provider that `TrackedImage` provides via `PressableContextWrapper`.

### Render Props approach
There's a less verbose solution using [Render Props](https://reactjs.org/docs/render-props.html).  

All LocationWrappers can render either regular ReactNode children or a function that receives an up-to-date [TrackingContext](/tracking/react-native/api-reference/providers/TrackingContext.md) as parameter.

TrackingContext will contain the closest instance of ReactNativeTracker and the LocationStack.

This is how that looks like:

```tsx
import { PressableContextWrapper, trackPressEvent } from "@objectiv/tracker-react-native";

type TrackedImageProps = ImageProps & {
  id: string,
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
};

const TrackedImage = ({ id, onPress, ...imageProps }: TrackedImageProps) => (
  <PressableContextWrapper id={id}>
    {(trackingContext) => (
      <Pressable
        onPress={(event) => {
          onPress && onPress(event);
          trackPressEvent(trackingContext);
        }}
      >
        <Image {...imageProps} />
      </Pressable>
    )}
  </PressableContextWrapper>
);
```

All we did here is getting rid of the usePressEventTracker and instead imported the lower-level trackPressEvent.  
This requires a `trackingContext` parameters which we can obtain, via Render Props, from `PressableContextWrapper`.
:::