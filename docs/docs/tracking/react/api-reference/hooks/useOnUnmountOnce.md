# useOnUnmountOnce

Runs on unmount once, unaffected by mounting and unmounting and re-renders.

```ts
useOnUnmountOnce = (effect: EffectCallback) => void
```

## Parameters
|          |            | type           | default value |
|:--------:|:-----------|:---------------|:--------------|
| required | **effect** | EffectCallback |               |

## Usage
```ts
import { useOnUnmountOnce } from "@objectiv/tracker-react";
```

```ts
useOnUnmountOnce(() => {
  // this effect will trigger whenever the using component gets unmounted for very the first time
})
```

<br />

:::info See also
- [useOnMount](/tracking/react/api-reference/hooks/useOnMount.md)
- [useOnMountOnce](/tracking/react/api-reference/hooks/useOnMountOnce.md)
- [useOnUnmount](/tracking/react/api-reference/hooks/useOnUnmount.md)
- [useTrackOnMount](/tracking/react/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnMountOnce](/tracking/react/api-reference/hooks/useTrackOnMountOnce.md)
- [useTrackOnUnmount](/tracking/react/api-reference/hooks/useTrackOnUnmount.md)
- [useTrackOnUnmountOnce](/tracking/react/api-reference/hooks/useTrackOnUnmountOnce.md)
- [useOnToggle](/tracking/react/api-reference/hooks/useOnToggle.md)
- [useTrackOnToggle](/tracking/react/api-reference/hooks/useTrackOnToggle.md)
:::
