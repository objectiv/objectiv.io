# useOnMountOnce

Runs on mount, unaffected by mounting and unmounting and re-renders.

```ts
useOnMountOnce = (effect: EffectCallback) => void
```

## Parameters
|          |            | type           | default value |
|:--------:|:-----------|:---------------|:--------------|
| required | **effect** | EffectCallback |               |

## Usage
```ts
import { useOnMountOnce } from "@objectiv/tracker-react-native";
```

```ts
useOnMountOnce(() => {
  // this effect will trigger whenever the using component gets mounted for very the first time
})
```

<br />

:::info See also
- [useOnMount](/tracking/react-native/api-reference/hooks/useOnMount.md)
- [useOnUnmount](/tracking/react-native/api-reference/hooks/useOnUnmount.md)
- [useOnUnmountOnce](/tracking/react-native/api-reference/hooks/useOnUnmountOnce.md)
- [useTrackOnMount](/tracking/react-native/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnMountOnce](/tracking/react-native/api-reference/hooks/useTrackOnMountOnce.md)
- [useTrackOnUnmount](/tracking/react-native/api-reference/hooks/useTrackOnUnmount.md)
- [useTrackOnUnmountOnce](/tracking/react-native/api-reference/hooks/useTrackOnUnmountOnce.md)
- [useOnToggle](/tracking/react-native/api-reference/hooks/useOnToggle.md)
- [useTrackOnToggle](/tracking/react-native/api-reference/hooks/useTrackOnToggle.md)
:::
