# useTrackOnChange

Monitors the given `state` and tracks the given TrackerEvent when state changes.

```ts
useTrackOnChange = <T>(parameters: {
  state: T,
  event: TrackerEvent
  tracker?: Tracker,
  options?: TrackEventOptions,
}) => void
```

## Parameters
|          |           | type              | default value |
|:--------:|:----------|:------------------|:--------------|
| required | **state** | unknown           |               |
| required | **event** | TrackerEvent      |               |
| optional | tracker   | ReactNativeTracker      |               |
| optional | options   | TrackEventOptions |               |

## Usage
```ts
import { makeMediaStartEvent, makeMediaPauseEvent } from "@objectiv/tracker-core";
import { useTrackOnChange } from "@objectiv/tracker-react-native";
```

```ts
useTrackOnChange({ 
  state: isPlaying, 
  event: isPlaying ? makeMediaStartEvent() : makeMediaPauseEvent()
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
- [useTrackOnToggle](/tracking/react-native/api-reference/hooks/useTrackOnToggle.md)
:::
