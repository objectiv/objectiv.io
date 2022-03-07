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
| optional | tracker   | ReactTracker      |               |
| optional | options   | TrackEventOptions |               |

## Usage
```ts
import { makeMediaStartEvent, makeMediaPauseEvent } from "@objectiv/tracker-core";
import { useTrackOnChange } from "@objectiv/tracker-react";
```

```ts
useTrackOnChange({ 
  state: isPlaying, 
  event: isPlaying ? makeMediaStartEvent() : makeMediaPauseEvent()
})
```

<br />

:::info See also
- [useOnMount](/tracking/react/api-reference/hooks/useOnMount.md)
- [useOnUnmount](/tracking/react/api-reference/hooks/useOnUnmount.md)
- [useTrackOnMount](/tracking/react/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnUnmount](/tracking/react/api-reference/hooks/useTrackOnUnmount.md)
- [useOnChange](/tracking/react/api-reference/hooks/useOnChange.md)
- [useOnToggle](/tracking/react/api-reference/hooks/useOnToggle.md)
- [useTrackOnToggle](/tracking/react/api-reference/hooks/useTrackOnToggle.md)
:::
