# useOnMount

Runs on mount, unaffected by re-renders.

```ts
useOnMount = (effect: EffectCallback) => void
```

## Parameters
|          |            | type           | default value |
|:--------:|:-----------|:---------------|:--------------|
| required | **effect** | EffectCallback |               |

## Usage
```ts
import { useOnMount } from "@objectiv/tracker-react";
```

```ts
useOnMount(() => {
  // this effect will trigger whenever the using component gets mounted and not when it re-renders
})
```

<br />

:::info See also
- [useOnMountOnce](/tracking/react/api-reference/hooks/useOnMountOnce.md)
- [useOnUnmount](/tracking/react/api-reference/hooks/useOnUnmount.md)
- [useOnUnmountOnce](/tracking/react/api-reference/hooks/useOnUnmountOnce.md)
- [useTrackOnMount](/tracking/react/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnMountOnce](/tracking/react/api-reference/hooks/useTrackOnMountOnce.md)
- [useTrackOnUnmount](/tracking/react/api-reference/hooks/useTrackOnUnmount.md)
- [useTrackOnUnmountOnce](/tracking/react/api-reference/hooks/useTrackOnUnmountOnce.md)
- [useOnToggle](/tracking/react/api-reference/hooks/useOnToggle.md)
- [useTrackOnToggle](/tracking/react/api-reference/hooks/useTrackOnToggle.md)
:::
