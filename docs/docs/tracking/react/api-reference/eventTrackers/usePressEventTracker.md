---
sidebar_position: 1
---
# usePressEventTracker

Returns a ready-to-trigger [trackPressEvent](/tracking/react/api-reference/eventTrackers/trackPressEvent.md) by retrieving ReactTracker instance and LocationStack automatically.

```ts
usePressEventTracker = (
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
import { usePressEventTracker } from "@objectiv/tracker-react";
```

```tsx title="Scenario: declaratively wrapping a third party download button"
import { PressableContextWrapper } from "@objectiv/tracker-react";

const trackPressEvent = usePressEventTracker();

<PressableContextWrapper id={'pressable'}>
  <DownloadButton
    onClick={() => {
      trackPressEvent();
    }}
  >
    Download
  </DownloadButton>
</PressableContextWrapper>
```

```tsx title="Scenario: virtual location wrapper"
import { makePressableContext } from "@objectiv/tracker-core";

const trackPressEvent = usePressEventTracker();

<ContextualMenu
  onMenuItemPress={(menuItem) => {
    trackPressEvent({
      // Wrap this event in a virtual location representing the clicked menu item
      locationStack: [
        makePressableContext({
          id: menuItem.id
        })
      ]
    });
  }}
/>
```

```tsx title="Scenario: synchronous PressEvent callback"
import { makePressableContext } from "@objectiv/tracker-core";

const trackPressEvent = usePressEventTracker();

const trackSynchronousPressEvent = usePressEventTracker({
  options: {
    waitForQueue: true
  }
});

// We can use a regular callback and specify the necessary options ad-hoc for this button
<Button
  onClick={async () => {
    await trackPressEvent({
      options: {
        waitForQueue: true
      }
    });
  }}
/>

// Or use the pre-configured callback to keep event handlers leaner
<Button
  onClick={async () => {
    await trackSynchronousPressEvent();
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
- [useMediaStopEventTracker](/tracking/react/api-reference/eventTrackers/useMediaStopEventTracker.md)
- [useSuccessEventTracker](/tracking/react/api-reference/eventTrackers/useSuccessEventTracker.md)
- [useVisibilityTracker](/tracking/react/api-reference/eventTrackers/useVisibilityTracker.md)
- [useVisibleEventTracker](/tracking/react/api-reference/eventTrackers/useVisibleEventTracker.md)
:::
