# useTrackOnToggle

Monitors the given `state` and runs the given `effect` when it changes.

```ts
useTrackOnToggle = (parameters: {
  state: boolean,
  trueEvent: TrackerEvent,
  falseEvent: TrackerEvent,
  tracker?: Tracker,
  options?: TrackEventOptions
}) => void
```

## Parameters
|          |                | type              | default value |
|:--------:|:---------------|:------------------|:--------------|
| required | **state**      | boolean           |               |
| required | **trueEvent**  | TrackerEvent      |               |
| required | **falseEvent** | TrackerEvent      |               |
| optional | tracker        | ReactNativeTracker      |               |
| optional | options        | TrackEventOptions |               |

## Usage

```ts
import { makeHiddenEvent, makeVisibleEvent } from "@objectiv/tracker-core";
import { useTrackOnToggle } from "@objectiv/tracker-react-native";

useTrackOnToggle({
  state: isVisible,
  trueEvent: makeVisibleEvent,
  falseEvent: makeHiddenEvent
})
```

<br />

:::info See also
- [useOnMount](/tracking/react-native/api-reference/hooks/useOnMount.md)
- [useOnUnmount](/tracking/react-native/api-reference/hooks/useOnUnmount.md)
- [useTrackOnMount](/tracking/react-native/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnUnmount](/tracking/react-native/api-reference/hooks/useTrackOnUnmount.md)
- [useOnChange](/tracking/react-native/api-reference/hooks/useOnChange.md)
- [useOnToggle](/tracking/react-native/api-reference/hooks/useOnToggle.md)
- [useTrackOnChange](/tracking/react-native/api-reference/hooks/useTrackOnChange.md)
:::
