# useTrackOnUnmount

Tracks the given TrackerEvent on unmount.

```ts
useTrackOnUnmount = (parameters: {
  event: TrackerEvent
  tracker?: Tracker,
  options?: TrackEventOptions,
})
```

## Parameters
|          |           | type              | default value |
|:--------:|:----------|:------------------|:--------------|
| required | **event** | TrackerEvent      |               |
| optional | tracker   | ReactNativeTracker      |               |
| optional | options   | TrackEventOptions |               |

## Usage
```ts
import { makeMediaStopEvent } from "@objectiv/tracker-core";
import { useTrackOnUnmount } from "@objectiv/tracker-react-native";
```

```ts
useTrackOnUnmount({ 
  event: makeMediaStopEvent()
})
```

<br />

:::info See also
- [useOnMount](/tracking/react-native/api-reference/hooks/useOnMount.md)
- [useOnUnmount](/tracking/react-native/api-reference/hooks/useOnUnmount.md)
- [useTrackOnMount](/tracking/react-native/api-reference/hooks/useTrackOnMount.md)
- [useOnChange](/tracking/react-native/api-reference/hooks/useOnChange.md)
- [useOnToggle](/tracking/react-native/api-reference/hooks/useOnToggle.md)
- [useTrackOnChange](/tracking/react-native/api-reference/hooks/useTrackOnChange.md)
- [useTrackOnToggle](/tracking/react-native/api-reference/hooks/useTrackOnToggle.md)
:::
