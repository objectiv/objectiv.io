# useOnUnmount

Runs on unmount, unaffected by re-renders.

```ts
useOnUnmount = (effect: EffectCallback) => void
```

## Parameters
|          |            | type           | default value |
|:--------:|:-----------|:---------------|:--------------|
| required | **effect** | EffectCallback |               |

## Usage
```ts
import { useOnUnmount } from "@objectiv/tracker-react";
```

```ts
useOnUnmount(() => {
  // this effect will trigger whenever the using component gets unmounted
})
```

<br />

:::info See also
- [useOnMount](/tracking/react/api-reference/hooks/useOnMount.md)
- [useOnMountOnce](/tracking/react/api-reference/hooks/useOnMountOnce.md)
- [useOnUnmountOnce](/tracking/react/api-reference/hooks/useOnUnmountOnce.md)
- [useTrackOnMount](/tracking/react/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnMountOnce](/tracking/react/api-reference/hooks/useTrackOnMountOnce.md)
- [useTrackOnUnmount](/tracking/react/api-reference/hooks/useTrackOnUnmount.md)
- [useTrackOnUnmountOnce](/tracking/react/api-reference/hooks/useTrackOnUnmountOnce.md)
- [useOnChange](/tracking/react/api-reference/hooks/useOnChange.md)
- [useOnToggle](/tracking/react/api-reference/hooks/useOnToggle.md)
- [useTrackOnChange](/tracking/react/api-reference/hooks/useTrackOnChange.md)
- [useTrackOnToggle](/tracking/react/api-reference/hooks/useTrackOnToggle.md)
:::
