# useFailureEventTracker

Returns a ready-to-trigger [trackFailureEvent](/tracking/react/api-reference/eventTrackers/trackFailureEvent.md) by retrieving ReactTracker instance and LocationStack automatically.

```ts
useFailureEventTracker = (
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
```tsx title="Scenario: form submit failure"
import { useFailureEventTracker } from "@objectiv/tracker-react";

const trackFailureEvent = useFailureEventTracker();

submitFormData(formData)
  .catch((error) => {
    trackFailureEvent({
      message: error.message
    });
  });
```

```tsx title="Scenario: virtual location wrapper"
import { makeContentContext } from "@objectiv/tracker-core";
import { useFailureEventTracker } from "@objectiv/tracker-react";

const trackFailureEvent = useFailureEventTracker();

submitFormData(formData)
  .catch((error) => {
    trackFailureEvent({
      locationStack: [
        makeContentContext({
          id: 'subscribe-form'
        })
      ],
      message: error.message
    });
  });
```

```tsx title="Scenario: additional global contexts representing form fields validation errors"
import { makeContentContext, makeInputValueContext } from "@objectiv/tracker-core";
import { useFailureEventTracker } from "@objectiv/tracker-react";

const trackFailureEvent = useFailureEventTracker();

validateForm(formData)
  .catch((errors) => {
    trackFailureEvent({
      locationStack: [
        makeContentContext({
          id: 'subscribe-form'
        })
      ],
      globalContexts: [
        errors.map(error => {
          makeInputValueContext({
            id: error.fieldName,
            value:  error.fieldValue
          })
        })
      ],
      message: 'Validation Error'
    });
  });
```

<br />

:::info See also
- [useApplicationLoadedEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useApplicationLoadedEventTracker.md)
- [useHiddenEventTracker](/tracking/react/api-reference/hooks/eventTrackers/useHiddenEventTracker.md)
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
