---
sidebar_position: 1
---
# useVisibilityTracker

Returns a ready-to-trigger [trackVisibility](/tracking/react/api-reference/eventTrackers/trackVisibility.md) by retrieving ReactTracker instance and LocationStack automatically.

```ts
useVisibilityTracker = (
  hookParameters: {
    tracker?: Tracker,
    options?: TrackEventOptions,
    locationStack?: LocationStack;
    globalContexts?: GlobalContexts;
  } = {}
) => (
  callbackParameters: {
    isVisible: boolean,
    tracker?: Tracker,
    options?: TrackEventOptions,
    locationStack?: LocationStack;
    globalContexts?: GlobalContexts;
  } = {}
) => Promise<TrackerEvent> 
```

## Hook Parameters
|          |                | type              | default value |
|:--------:|:---------------|:------------------|:--------------|
| optional | tracker        | ReactTracker      |               |
| optional | options        | TrackEventOptions |               |
| optional | locationStack  | LocationStack     |               |
| optional | globalContexts | GlobalContexts    |               |

## Callback Parameters
|          |                | type              | default value |
|:--------:|:---------------|:------------------|:--------------|
| required | **isVisible**  | boolean           |               |
| optional | tracker        | ReactTracker      |               |
| optional | options        | TrackEventOptions |               |
| optional | locationStack  | LocationStack     |               |
| optional | globalContexts | GlobalContexts    |               |


## Returns
A callback with the same parameters of the hook itself and an extra `isVisible` parameter to determine whether a Visible or Hidden Event is triggered.  

```ts
(callbackParameters: {
  isVisible: boolean,
  tracker?: Tracker,
  options?: TrackEventOptions,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
} = {}) => Promise<TrackerEvent>
```

## Usage
```tsx title="Scenario: declaratively wrapping a third party drawer with onChange callback carrying the latest state"
import { OverlayContextWrapper, useVisibilityTracker } from "@objectiv/tracker-react";

const trackVisibility = useVisibilityTracker();

<OverlayContextWrapper id={'expandable'}>
  <Drawer
    onChange={(isOpen) => {
      trackVisibility({ isVisible: isOpen });
    }}
  />
</OverlayContextWrapper>
```

```tsx title="Scenario: virtual location wrapper"
import { makeOverlayContext } from "@objectiv/tracker-core";
import { useVisibilityTracker } from "@objectiv/tracker-react";

const trackVisibility = useVisibilityTracker();

<LayoutWithSidebars
  onSidebarToggle={(sidebar, isOpen) => {
    trackVisibility({ 
      isVisible: isOpen,
      // Create a virtual location representing which sidebar has been expanded 
      locationStack: [
        makeOverlayContext({ id: sidebar.id })
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
- [useMediaStopEventTracker](/tracking/react/api-reference/eventTrackers/useMediaStopEventTracker.md)
- [usePressEventTracker](/tracking/react/api-reference/eventTrackers/usePressEventTracker.md)
- [useSuccessEventTracker](/tracking/react/api-reference/eventTrackers/useSuccessEventTracker.md)
- [useVisibleEventTracker](/tracking/react/api-reference/eventTrackers/useVisibleEventTracker.md)
:::
