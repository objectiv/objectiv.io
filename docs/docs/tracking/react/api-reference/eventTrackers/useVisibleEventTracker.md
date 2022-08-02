---
sidebar_position: 1
---
# useVisibleEventTracker

Returns a ready-to-trigger [trackVisibleEvent](/tracking/react/api-reference/eventTrackers/trackVisibleEvent.md) by retrieving ReactTracker instance and LocationStack automatically.

```ts
useVisibleEventTracker = (
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
```tsx title="Scenario: declaratively wrapping a third party component with onShow callback"
import { ExpandableContextWrapper, useVisibleEventTracker } from "@objectiv/tracker-react";

const trackVisibleEvent = useVisibleEventTracker();

<ExpandableContextWrapper id={'expandable'}>
  <ThirdPartyComponent
    onShow={() => {
      trackVisibleEvent();
    }}
  >
  ...
  </ThirdPartyComponent>
</ExpandableContextWrapper>
```

```tsx title="Scenario: virtual location at construction, options override and virtual location at callback"
import { makeContentContext, makeExpandableContext } from "@objectiv/tracker-core";
import { useVisibleEventTracker } from "@objectiv/tracker-react";

// Generate a VisibleEvent tracker preconfigured with a ContentContext wrapper 
const trackVisibleEvent = useVisibleEventTracker({
  locationStack: [
    makeContentContext({ id: 'wrapper' })
  ]
});

<ThirdPartyExpandableGroupedList
  onShow={(group, expanded) => {
    trackVisibleEvent({
      // Create another virtual location representing which group has been expanded 
      locationStack: [
        makeExpandableContext({ id: group.id })
      ]
    });
  }}
>
  ...
</ThirdPartyExpandableGroupedList>
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
- [useVisibilityTracker](/tracking/react/api-reference/eventTrackers/useVisibilityTracker.md)
:::