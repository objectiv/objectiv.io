# useTrackOnMount

Tracks the given TrackerEvent on mount.

```ts
useTrackOnMount = (parameters: {
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
import { makeMediaLoadEvent } from "@objectiv/tracker-core";
import { useTrackOnMount } from "@objectiv/tracker-react-native";
```

```ts
useTrackOnMount({ 
  event: makeMediaLoadEvent()
})
```

<br />

:::info See also
- [useOnMount](/tracking/react-native/api-reference/hooks/useOnMount.md)
- [useOnUnmount](/tracking/react-native/api-reference/hooks/useOnUnmount.md)
- [useTrackOnUnmount](/tracking/react-native/api-reference/hooks/useTrackOnUnmount.md)
- [useOnChange](/tracking/react-native/api-reference/hooks/useOnChange.md)
- [useOnToggle](/tracking/react-native/api-reference/hooks/useOnToggle.md)
- [useTrackOnChange](/tracking/react-native/api-reference/hooks/useTrackOnChange.md)
- [useTrackOnToggle](/tracking/react-native/api-reference/hooks/useTrackOnToggle.md)
:::
