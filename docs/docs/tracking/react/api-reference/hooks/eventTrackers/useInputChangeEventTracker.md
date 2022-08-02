# useInputChangeEventTracker

Returns a ready-to-trigger [trackInputChangeEvent](/tracking/react/api-reference/eventTrackers/trackInputChangeEvent.md) by retrieving ReactTracker instance and LocationStack automatically.

```ts
useInputChangeEventTracker = (
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
import { useInputChangeEventTracker } from "@objectiv/tracker-react";
```

```tsx title="Scenario: third party date selector with onChange callback"
import { InputContextWrapper } from "@objectiv/tracker-react";

const trackInputChange = useInputChangeEventTracker();

<InputContextWrapper id={'date-selector'}>
  <DateSelector
    onChange={() => {
      trackInputChange();
    }}
  />
</InputContextWrapper>
```

```tsx title="Scenario: virtual location wrapper and track timestamp when the DateSelector changes"
import { makeInputContext, makeInputValueContext } from "@objectiv/tracker-core";

const dateSelectorId = 'date-selector'; 

// Generate a InputChangeEvent tracker preconfigured with a wrapper InputContext
const trackInputChange = useInputChangeEventTracker({
  locationStack: [
    makeInputContext(dateSelectorId)
  ]
});

<DateSelector
  onChange={(selectedDate: Date) => {
    trackInputChange({
      // Track timestamp as InputValueContext
      globalContexts: [
        makeInputValueContext({
          id: dateSelectorId,
          value: selectedDate.getTime().toString()
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
- [useMediaLoadEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaLoadEventTracker.md)
- [useMediaPauseEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaPauseEventTracker.md)
- [useMediaStartEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaStartEventTracker.md)
- [useMediaStopEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useMediaStopEventTracker.md)
- [usePressEventTracker](/tracking/react/api-reference/hooks/eventTrackers/usePressEventTracker.md)
- [useSuccessEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useSuccessEventTracker.md)
- [useVisibilityTracker](/tracking/react/api-reference/hooks/eventTrackers/useVisibilityTracker.md)
- [useVisibleEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useVisibleEventTracker.md)
:::
