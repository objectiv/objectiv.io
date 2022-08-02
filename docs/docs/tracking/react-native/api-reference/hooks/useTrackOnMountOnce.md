# useTrackOnMountOnce

Tracks the given TrackerEvent on mount, unaffected by mounting and unmounting and re-renders.

```ts
useTrackOnMountOnce = (parameters: {
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
import { makeVisibleEvent } from "@objectiv/tracker-core";
import { useTrackOnMountOnce } from "@objectiv/tracker-react-native";
```

```ts
useTrackOnMountOnce({ 
  event: makeVisibleEvent()
})
```

<br />

:::info See also
- [useOnMount](/tracking/react-native/api-reference/hooks/useOnMount.md)
- [useOnMountOnce](/tracking/react-native/api-reference/hooks/useOnMountOnce.md)
- [useOnUnmount](/tracking/react-native/api-reference/hooks/useOnUnmount.md)
- [useOnUnmountOnce](/tracking/react-native/api-reference/hooks/useOnUnmountOnce.md)
- [useTrackOnMountOnce](/tracking/react-native/api-reference/hooks/useTrackOnMountOnce.md)
- [useTrackOnUnmount](/tracking/react-native/api-reference/hooks/useTrackOnUnmount.md)
- [useTrackOnUnmountOnce](/tracking/react-native/api-reference/hooks/useTrackOnUnmountOnce.md)
- [useOnToggle](/tracking/react-native/api-reference/hooks/useOnToggle.md)
- [useTrackOnToggle](/tracking/react-native/api-reference/hooks/useTrackOnToggle.md)
:::
