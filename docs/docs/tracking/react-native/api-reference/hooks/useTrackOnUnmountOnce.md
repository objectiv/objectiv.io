# useTrackOnUnmountOnce

Tracks the given TrackerEvent on unmount, unaffected by mounting and unmounting and re-renders.

```ts
useTrackOnUnmountOnce = (parameters: {
  event: TrackerEvent
  tracker?: Tracker,
  options?: TrackEventOptions,
})
```

## Parameters
|          |           | type              | default value |
|:--------:|:----------|:------------------|:--------------|
| required | **event** | TrackerEvent      |               |
| optional | tracker   | ReactTracker      |               |
| optional | options   | TrackEventOptions |               |

## Usage
```ts
import { makeHiddenEvent } from "@objectiv/tracker-core";
import { useTrackOnUnmountOnce } from "@objectiv/tracker-react-native";
```

```ts
useTrackOnUnmountOnce({ 
  event: makeHiddenEvent()
})
```

<br />

:::info See also
- [useOnMount](/tracking/react-native/api-reference/hooks/useOnMount.md)
- [useOnMountOnce](/tracking/react-native/api-reference/hooks/useOnMountOnce.md)
- [useOnUnmount](/tracking/react-native/api-reference/hooks/useOnUnmount.md)
- [useOnUnmountOnce](/tracking/react-native/api-reference/hooks/useOnUnmountOnce.md)
- [useTrackOnMount](/tracking/react-native/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnMountOnce](/tracking/react-native/api-reference/hooks/useTrackOnMountOnce.md)
- [useTrackOnUnmountOnce](/tracking/react-native/api-reference/hooks/useTrackOnUnmountOnce.md)
- [useOnToggle](/tracking/react-native/api-reference/hooks/useOnToggle.md)
- [useTrackOnToggle](/tracking/react-native/api-reference/hooks/useTrackOnToggle.md)
:::
