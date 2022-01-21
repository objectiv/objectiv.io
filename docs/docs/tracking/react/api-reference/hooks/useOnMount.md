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
- [useOnUnmount](/tracking/react/api-reference/hooks/useOnUnmount.md)
- [useTrackOnMount](/tracking/react/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnUnmount](/tracking/react/api-reference/hooks/useTrackOnUnmount.md)
- [useOnChange](/tracking/react/api-reference/hooks/useOnChange.md)
- [useOnToggle](/tracking/react/api-reference/hooks/useOnToggle.md)
- [useTrackOnChange](/tracking/react/api-reference/hooks/useTrackOnChange.md)
- [useTrackOnToggle](/tracking/react/api-reference/hooks/useTrackOnToggle.md)
:::
