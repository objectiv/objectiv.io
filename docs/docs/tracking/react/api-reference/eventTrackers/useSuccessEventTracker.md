---
sidebar_position: 1
---
# useSuccessEventTracker

Returns a ready-to-trigger [trackSuccessEvent](/tracking/react/api-reference/eventTrackers/trackSuccessEvent.md) by retrieving ReactTracker instance and LocationStack automatically.

```ts
useSuccessEventTracker = (
  hookParameters: {
    tracker?: Tracker,
    options?: TrackEventOptions,
    locationStack?: LocationStack;
    globalContexts?: GlobalContexts;
  } = {}
) => (
  callbackParameters: {
    message: string,
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
| required | **message**    | string            |               |
| optional | tracker        | ReactTracker      |               |
| optional | options        | TrackEventOptions |               |
| optional | locationStack  | LocationStack     |               |
| optional | globalContexts | GlobalContexts    |               |

## Returns
A callback with the same parameters of the hook itself and an extra `message` parameter.  

```ts
(callbackParameters: {
  message: string,
  tracker?: Tracker,
  options?: TrackEventOptions,
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
} = {}) => Promise<TrackerEvent>
```

## Usage
```tsx title="Scenario: form submit success"
import { useSuccessEventTracker } from "@objectiv/tracker-react";

const trackSuccessEvent = useSuccessEventTracker();

submitFormData(formData)
  .then((response) => {
    if (response.ok) {
      trackSuccessEvent({
        message: response.statusText
      });
    }
  });
```

```tsx title="Scenario: virtual location wrapper"
import { makeContentContext } from "@objectiv/tracker-core";
import { useSuccessEventTracker } from "@objectiv/tracker-react";

const trackSuccessEvent = useSuccessEventTracker();

submitFormData(formData)
  .then((response) => {
    trackSuccessEvent({
      locationStack: [
        makeContentContext({
          id: 'subscribe-form'
        })
      ],
      message: response.statusText
    });
  });
```

```tsx title="Scenario: additional global context representing the search term"
import { makeInputValueContext } from "@objectiv/tracker-core";
import { useFailureEventTracker } from "@objectiv/tracker-react";

const trackSuccessEvent = useSuccessEventTracker();

submitSearchQuery(searchQuery)
  .then((queryResponse) => {
    trackSuccessEvent({
      globalContexts: [
        makeInputValueContext({
          id: 'search-term',
          value: searchQuery.term
        })
      ],
      message: queryResponse.statusText
    });
  });
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
- [useVisibilityTracker](/tracking/react/api-reference/eventTrackers/useVisibilityTracker.md)
- [useVisibleEventTracker](/tracking/react/api-reference/eventTrackers/useVisibleEventTracker.md)
:::
