# useTrackOnToggle

Monitors the given `state` and runs the given `effect` when it changes.

```ts
useTrackOnToggle = (parameters: {
  state: | () => boolean,
  trueEvent: TrackerEvent,
  falseEvent: TrackerEvent,
  tracker?: Tracker,
  options?: TrackEventOptions
}) => void
```

## Parameters
|          |                | type                                   | default value |
|:--------:|:---------------|:---------------------------------------|:--------------|
| required | **state**      | boolean &vert; () => boolean           |               |
| required | **trueEvent**  | TrackerEvent                           |               |
| required | **falseEvent** | TrackerEvent                           |               |
| optional | tracker        | ReactTracker                           |               |
| optional | options        | TrackEventOptions                      |               |

## Usage

```ts title="with a boolean state"
import { makeHiddenEvent, makeVisibleEvent } from "@objectiv/tracker-core";
import { useTrackOnToggle } from "@objectiv/tracker-react";

useTrackOnToggle({
  state: isVisible,
  trueEvent: makeVisibleEvent,
  falseEvent: makeHiddenEvent
})
```

```ts title="with a predicate state"
import { makeHiddenEvent, makeVisibleEvent } from "@objectiv/tracker-core";
import { useTrackOnToggle } from "@objectiv/tracker-react";

useTrackOnToggle({
  state: () => isVisible,
  trueEvent: makeVisibleEvent,
  falseEvent: makeHiddenEvent
})
```

<br />

:::info See also
- [useOnMount](/tracking/react/api-reference/hooks/useOnMount.md)
- [useOnUnmount](/tracking/react/api-reference/hooks/useOnUnmount.md)
- [useTrackOnMount](/tracking/react/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnUnmount](/tracking/react/api-reference/hooks/useTrackOnUnmount.md)
- [useOnToggle](/tracking/react/api-reference/hooks/useOnToggle.md)
:::
