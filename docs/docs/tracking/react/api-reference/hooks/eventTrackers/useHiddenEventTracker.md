# useHiddenEventTracker

Returns a ready-to-trigger [trackHiddenEvent](/tracking/react/api-reference/eventTrackers/trackHiddenEvent.md) by retrieving ReactTracker instance and LocationStack automatically.

```ts
useHiddenEventTracker = (
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
import { useHiddenEventTracker } from "@objectiv/tracker-react";
```

```tsx title="Scenario: third party component with onHide callback"
import { ExpandableContextWrapper } from "@objectiv/tracker-react";

const trackHiddenEvent = useHiddenEventTracker();

<ExpandableContextWrapper id={'expandable'}>
  <ThirdPartyComponent
    onHide={() => {
      trackHiddenEvent();
    }}
  >
  ...
  </ThirdPartyComponent>
</ExpandableContextWrapper>
```

```tsx title="Scenario: virtual location at construction, options override and virtual location at callback"
import { makeContentContext, makeExpandableContext } from "@objectiv/tracker-core";

// Generate a HiddenEvent tracker preconfigured with a ContentContext wrapper 
const trackHiddenEvent = useHiddenEventTracker({
  locationStack: [
    makeContentContext({ id: 'wrapper' })
  ]
});

<ThirdPartyExpandableGroupedList
  onHide={(group, expanded) => {
    trackHiddenEvent({
      // Create another virtual location representing which group has been collapsed 
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
- [useApplicationLoadedEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useApplicationLoadedEventTracker.md)
- [useFailureEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useFailureEventTracker.md)
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
